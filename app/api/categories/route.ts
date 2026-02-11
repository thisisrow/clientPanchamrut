import { NextResponse, type NextRequest } from "next/server";
import dbConnect from "@/lib/mongodb";
import CategoryModel from "@/lib/models/Category";
import { slugify } from "@/lib/slug";

function createEtag(count: number, updatedAt?: Date | null) {
  const stamp = updatedAt ? updatedAt.getTime() : 0;
  return `W/"categories-${count}-${stamp}"`;
}

export async function GET(request: NextRequest) {
  await dbConnect();

  const categories = await CategoryModel.find()
    .sort({ displayOrder: 1, name: 1 })
    .lean();

  const latestUpdatedAt = categories.reduce<Date | null>((acc, item) => {
    if (!item.updatedAt) {
      return acc;
    }
    if (!acc || item.updatedAt > acc) {
      return item.updatedAt;
    }
    return acc;
  }, null);

  const etag = createEtag(categories.length, latestUpdatedAt);
  const ifNoneMatch = request.headers.get("if-none-match");

  if (ifNoneMatch && ifNoneMatch === etag) {
    return new NextResponse(null, { status: 304, headers: { ETag: etag } });
  }

  const payload = categories.map((category) => ({
    id: category._id.toString(),
    name: category.name,
    slug: slugify(category.name),
    description: category.description || "",
    displayOrder: category.displayOrder ?? 0,
    imageUrl: category.imageUrl || "",
  }));

  return NextResponse.json(payload, {
    headers: {
      ETag: etag,
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
