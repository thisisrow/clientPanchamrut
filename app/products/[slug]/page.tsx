import { notFound } from "next/navigation";
import ProductDetail from "@/components/catalog/ProductDetail";
import {
  getCategories,
  getProductBySlug,
  getRelatedProducts,
} from "@/components/catalog/data";

type ProductDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const categories = await getCategories();
  const category = categories.find(
    (item) => item.slug === product.categorySlug,
  );
  const relatedProducts = await getRelatedProducts(product, 3);

  return (
    <ProductDetail
      product={product}
      category={category}
      relatedProducts={relatedProducts}
    />
  );
}
