import ProductsCatalog from "@/components/catalog/ProductsCatalog";

type ProductsPageProps = {
  searchParams?: Promise<{
    category?: string;
  }>;
};

export const dynamic = "force-dynamic";

export default async function ProductsPage({
  searchParams,
}: ProductsPageProps) {
  const params = (await searchParams) ?? {};
  return <ProductsCatalog activeCategorySlug={params.category} />;
}
