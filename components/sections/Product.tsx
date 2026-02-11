import ProductsCatalog from "@/components/catalog/ProductsCatalog";

type ProductSectionProps = {
  activeCategorySlug?: string;
};

export default function ProductSection({
  activeCategorySlug,
}: ProductSectionProps) {
  return <ProductsCatalog activeCategorySlug={activeCategorySlug} />;
}
