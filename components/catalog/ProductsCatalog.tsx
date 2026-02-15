import Link from "next/link";
import FiltersSidebar from "./FiltersSidebar";
import ProductCard from "./ProductCard";
import { getCategories, getProducts } from "./data";

type ProductsCatalogProps = {
  activeCategorySlug?: string;
};

export default async function ProductsCatalog({
  activeCategorySlug,
}: ProductsCatalogProps) {
  const categories = await getCategories();
  const activeCategory = activeCategorySlug
    ? categories.find((category) => category.slug === activeCategorySlug)
    : undefined;

  const products = await getProducts(
    activeCategorySlug ?? activeCategory?.slug,
  );

  return (
    <main className="bg-[#f8fafc]">
      <section className="py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <div data-aos="fade-right" className="flex flex-col gap-4">
            <Link
              href="/category"
              className="inline-flex items-center gap-2 text-base font-semibold text-[#15803d] hover:text-[#166534]"
            >
              <span className="material-symbols-outlined text-base">
                arrow_back
              </span>
              Back to categories
            </Link>

            <div className="flex flex-col gap-3">
              <span className="text-xs uppercase tracking-[0.35em] text-[#16a34a]">
                Product Catalog
              </span>

              <h1 className="text-4xl md:text-5xl font-display font-bold text-[#15803d] capitalize">
                {activeCategory ? activeCategory.name : "All Products"}
              </h1>

              <p className="max-w-2xl text-base text-[#475569]">
                {activeCategory
                  ? activeCategory.description
                  : "Browse our complete product range with filters tailored to your specification."}
              </p>
            </div>

            <div className="flex flex-wrap gap-3 text-base">
              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 font-semibold text-[#475569]">
                {products.length} Products
              </span>

              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 font-semibold text-[#475569]">
                {categories.length} Categories
              </span>
            </div>

            {activeCategorySlug && !activeCategory ? (
              <div className="rounded-2xl border border-[#f59e0b]/40 bg-[#fffbeb] px-4 py-3 text-base text-[#92400e]">
                Category not found. Showing all products instead.
              </div>
            ) : null}
          </div>

          <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[280px_1fr]">
            <FiltersSidebar products={products} />

            <div className="space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-base text-[#475569]">
                  Showing{" "}
                  <span className="font-semibold text-[#0f172a]">
                    {products.length}
                  </span>{" "}
                  results
                </p>

                <div className="flex flex-wrap gap-2">
                  {categories.slice(0, 3).map((category) => (
                    <Link
                      key={category.id || category.slug}
                      href={`/products?category=${category.slug}`}
                      className="rounded-full border border-[#e2e8f0] bg-white px-3 py-1 text-xs font-semibold text-[#475569] transition-colors hover:border-[#15803d] hover:text-[#15803d]"
                    >
                      {category.name}
                    </Link>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {products.map((product) => (
                  <ProductCard key={product.slug} product={product} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
