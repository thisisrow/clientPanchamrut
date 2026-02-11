import { NextResponse, type NextRequest } from "next/server";
import dbConnect from "@/lib/mongodb";
import CategoryModel from "@/lib/models/Category";
import ProductModel from "@/lib/models/Product";
import { slugify } from "@/lib/slug";

function createEtag(count: number, updatedAt?: Date | null, scope = "all") {
  const stamp = updatedAt ? updatedAt.getTime() : 0;
  return `W/"products-${scope}-${count}-${stamp}"`;
}

function shortDescription(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }
  if (trimmed.length <= 120) {
    return trimmed;
  }
  return `${trimmed.slice(0, 117)}...`;
}

export async function GET(request: NextRequest) {
  await dbConnect();

  const { searchParams } = new URL(request.url);
  const categoryQuery = searchParams.get("category") || "";
  const normalizedSlug = categoryQuery ? slugify(categoryQuery) : "";

  const categories = await CategoryModel.find().lean();
  const categoryBySlug = new Map(
    categories.map((category) => [slugify(category.name), category]),
  );
  const activeCategory = normalizedSlug
    ? categoryBySlug.get(normalizedSlug)
    : undefined;

  if (categoryQuery && !activeCategory) {
    return NextResponse.json([], {
      headers: {
        ETag: createEtag(0, null, normalizedSlug || categoryQuery),
        "Cache-Control": "public, max-age=0, must-revalidate",
      },
    });
  }

  const productQuery = activeCategory ? { categoryId: activeCategory._id } : {};

  const products = await ProductModel.find(productQuery)
    .populate("categoryId")
    .sort({ createdAt: -1 })
    .lean();

  const latestUpdatedAt = products.reduce<Date | null>((acc, item) => {
    if (!item.updatedAt) {
      return acc;
    }
    if (!acc || item.updatedAt > acc) {
      return item.updatedAt;
    }
    return acc;
  }, null);

  const etag = createEtag(
    products.length,
    latestUpdatedAt,
    normalizedSlug || "all",
  );
  const ifNoneMatch = request.headers.get("if-none-match");

  if (ifNoneMatch && ifNoneMatch === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  const payload = products.map((product) => {
    const category = product.categoryId as typeof categories[number] | undefined;
    const images = product.images ?? [];
    const image = images[0] ?? "";

    return {
      id: product._id.toString(),
      slug: slugify(product.name),
      name: product.name,
      categoryId: category?._id?.toString() ?? "",
      categoryName: category?.name ?? "",
      categorySlug: category ? slugify(category.name) : "",
      price: product.price,
      unit: product.unit,
      description: product.description ?? "",
      shortDescription: shortDescription(product.description ?? ""),
      images,
      image,
      specs: product.specs ?? [],
      stockStatus: "Available",
    };
  });

  return NextResponse.json(payload, {
    headers: {
      ETag: etag,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
