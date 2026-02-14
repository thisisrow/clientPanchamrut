import ProductCard from "./ProductCard";
import { Product } from "./data";

type RelatedProductsProps = {
  title: string;
  products: Product[];
};

export default function RelatedProducts({
  title,
  products,
}: RelatedProductsProps) {
  return (
    <div className="space-y-8">
      <div data-aos="fade-right">
        <span className="text-xs uppercase tracking-[0.35em] text-[#166534]">
          Similar Products
        </span>
        <h2 className="mt-2 text-3xl font-display font-bold text-[#0f172a]">
          {title}
        </h2>
      </div>

      {products.length ? (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard
              key={product.slug}
              product={product}
              showActions={false}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-[#e2e8f0] bg-[#f8fafc] px-6 py-8 text-base text-[#475569]">
          No related products found right now. Check back soon for more options.
        </div>
      )}
    </div>
  );
}
