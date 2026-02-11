export type Category = {
  id: string;
  slug: string;
  name: string;
  description: string;
  image: string;
  order: number;
};

export type ProductAttribute = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  categoryId: string;
  categoryName: string;
  categorySlug: string;
  price: number;
  unit: "kg" | "l" | string;
  image: string;
  gallery: string[];
  shortDescription: string;
  description: string;
  stockStatus: "Available" | "Limited" | "Out of Stock";
  attributes: ProductAttribute[];
};

export const supportPhoneDisplay = "+91 98707 95121";
export const supportPhoneLink = "+919870795121";

const envUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://client-panchamrut.vercel.app");

const baseUrl = envUrl.startsWith("http") ? envUrl : `https://${envUrl}`;

async function fetchJson<T>(path: string, tags: string[] = []) {
  const url = new URL(path, baseUrl).toString();
  const response = await fetch(url, {
    cache: "force-cache",
    next: tags.length ? { tags } : undefined,
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }

  return (await response.json()) as T;
}

async function fetchJsonAllowNotFound<T>(path: string, tags: string[] = []) {
  const url = new URL(path, baseUrl).toString();
  const response = await fetch(url, {
    cache: "force-cache",
    next: tags.length ? { tags } : undefined,
  });

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }

  return (await response.json()) as T;
}

export async function getCategories(): Promise<Category[]> {
  const data = await fetchJson<
    {
      id: string;
      name: string;
      slug: string;
      description: string;
      displayOrder: number;
      imageUrl: string;
    }[]
  >("/api/categories", ["categories"]);

  return data.map((category) => ({
    id: category.id,
    name: category.name,
    slug: category.slug,
    description: category.description || "",
    image: category.imageUrl || "",
    order: category.displayOrder ?? 0,
  }));
}

export async function getProducts(categorySlug?: string): Promise<Product[]> {
  const query = categorySlug ? `?category=${categorySlug}` : "";
  const data = await fetchJson<
    {
      id: string;
      slug: string;
      name: string;
      categoryId: string;
      categoryName: string;
      categorySlug: string;
      price: number;
      unit: string;
      description: string;
      shortDescription: string;
      images: string[];
      image: string;
      specs: { key: string; value: string }[];
      stockStatus: "Available" | "Limited" | "Out of Stock";
    }[]
  >(`/api/products${query}`, ["products", categorySlug ?? "all-products"]);

  return data.map((product) => ({
    id: product.id,
    slug: product.slug,
    name: product.name,
    categoryId: product.categoryId,
    categoryName: product.categoryName,
    categorySlug: product.categorySlug,
    price: product.price,
    unit: product.unit,
    image: product.image,
    gallery: product.images ?? [],
    shortDescription: product.shortDescription || "",
    description: product.description || "",
    stockStatus: product.stockStatus,
    attributes: (product.specs ?? []).map((spec) => ({
      label: spec.key,
      value: spec.value,
    })),
  }));
}

export async function getProductBySlug(slug: string) {
  const data = await fetchJsonAllowNotFound<{
    id: string;
    slug: string;
    name: string;
    categoryId: string;
    categoryName: string;
    categorySlug: string;
    price: number;
    unit: string;
    description: string;
    shortDescription: string;
    images: string[];
    image: string;
    specs: { key: string; value: string }[];
    stockStatus: "Available" | "Limited" | "Out of Stock";
  }>(`/api/products/${slug}`, ["products", `product-${slug}`]);

  if (!data) {
    return null;
  }

  return {
    id: data.id,
    slug: data.slug,
    name: data.name,
    categoryId: data.categoryId,
    categoryName: data.categoryName,
    categorySlug: data.categorySlug,
    price: data.price,
    unit: data.unit,
    image: data.image,
    gallery: data.images ?? [],
    shortDescription: data.shortDescription || "",
    description: data.description || "",
    stockStatus: data.stockStatus,
    attributes: (data.specs ?? []).map((spec) => ({
      label: spec.key,
      value: spec.value,
    })),
  } as Product;
}

export async function getProductsByCategorySlug(slug?: string) {
  return getProducts(slug);
}

export async function getProductCountByCategory(slug: string) {
  const products = await getProducts(slug);
  return products.length;
}

export async function getRelatedProducts(product: Product, limit = 3) {
  const products = await getProducts(product.categorySlug);
  return products.filter((item) => item.slug !== product.slug).slice(0, limit);
}

export function formatPrice(product: Product) {
  const formatted = product.price.toLocaleString("en-IN", {
    maximumFractionDigits: 0,
  });

  return `INR ${formatted} / ${product.unit}`;
}
