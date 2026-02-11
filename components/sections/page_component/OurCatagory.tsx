import Link from "next/link";
import { getCategories, getProducts } from "@/components/catalog/data";

export default async function OurCatagory() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  const topCategories = [...categories]
    .sort((a, b) => a.order - b.order)
    .slice(0, 4);
  const countByCategory = products.reduce<Record<string, number>>(
    (acc, product) => {
      acc[product.categorySlug] = (acc[product.categorySlug] ?? 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <section className="md:py-24 bg-white" id="categories">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-[#15803d] font-bold tracking-widest uppercase text-base mb-4 block">
              Our Portfolio
            </span>
            <h2 className="text-4xl font-display font-bold text-slate-900">
              Product Categories
            </h2>
            <p className="text-slate-500 mt-4 max-w-2xl">
              Browse our extensive range of high-quality chemicals across
              various industrial segments.
            </p>
          </div>
          <Link
            className="text-[#15803d] font-semibold flex items-center gap-2 hover:gap-4 transition-all"
            href="/catagory"
          >
            View Full Catalog{" "}
            <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {topCategories.map((category) => (
            <div
              key={category.id || category.slug}
              className="group relative bg-slate-50 rounded-3xl overflow-hidden border border-slate-100 hover:border-primary/40 transition-all duration-300"
            >
              <div className="h-64 overflow-hidden relative">
                <Link href={`/products?category=${category.slug}`}>
                  <img
                    alt={category.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={category.image}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>
                </Link>
              </div>
              <div className="p-8">
                <Link href={`/products?category=${category.slug}`}>
                  <h3 className="text-2xl font-display font-bold text-slate-900 mb-2">
                    {category.name}
                  </h3>
                </Link>
                <p className="text-[#15803d] font-medium text-base mb-6">
                  {countByCategory[category.slug] ?? 0} Products
                </p>
                <Link
                  className="inline-flex items-center text-slate-600 font-semibold group/link hover:text-[#15803d] transition-colors"
                  href={`/products?category=${category.slug}`}
                >
                  View All{" "}
                  <span className="material-symbols-outlined ml-2 text-base transition-transform group-hover/link:translate-x-1">
                    arrow_forward
                  </span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
