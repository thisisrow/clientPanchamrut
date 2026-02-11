import { NextResponse, type NextRequest } from "next/server";
import dbConnect from "@/lib/mongodb";
import CategoryModel from "@/lib/models/Category";
import ProductModel from "@/lib/models/Product";
import { slugify } from "@/lib/slug";

function createEtag(updatedAt?: Date | null, slug = "") {
  const stamp = updatedAt ? updatedAt.getTime() : 0;
  return `W/"product-${slug}-${stamp}"`;
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> },
) {
  await dbConnect();

  const { slug: requestedSlug } = await params;

  const categories = await CategoryModel.find().lean();
  const categoryById = new Map(
    categories.map((category) => [category._id.toString(), category]),
  );

  const products = await ProductModel.find().lean();
  const product = products.find(
    (item) => slugify(item.name) === requestedSlug,
  );

  if (!product) {
    return NextResponse.json({ message: "Not found" }, { status: 404 });
  }

  const category = categoryById.get(product.categoryId.toString());
  const etag = createEtag(product.updatedAt, requestedSlug);
  const ifNoneMatch = request.headers.get("if-none-match");

  if (ifNoneMatch && ifNoneMatch === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  const images = product.images ?? [];
  const image = images[0] ?? "";

  const payload = {
    id: product._id.toString(),
    slug: slugify(product.name),
    name: product.name,
    categoryId: category?._id?.toString() ?? "",
    categoryName: category?.name ?? "",
    categorySlug: category ? slugify(category.name) : "",
    price: product.price,
    unit: product.unit,
    description: product.description ?? "",
    shortDescription: (product.description ?? "").slice(0, 120),
    images,
    image,
    specs: product.specs ?? [],
    stockStatus: "Available",
  };

  return NextResponse.json(payload, {
    headers: {
      ETag: etag,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
