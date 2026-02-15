import Link from "next/link";
import Image from "next/image";
import { getCategories, getProducts } from "./data";

export default async function CategoryListing() {
  const [categories, products] = await Promise.all([
    getCategories(),
    getProducts(),
  ]);
  const sortedCategories = [...categories].sort((a, b) => a.order - b.order);
  const countByCategory = products.reduce<Record<string, number>>(
    (acc, product) => {
      acc[product.categorySlug] = (acc[product.categorySlug] ?? 0) + 1;
      return acc;
    },
    {},
  );

  return (
    <main className="bg-[#f8fafc]">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute -top-32 -right-16 h-72 w-72 rounded-full bg-[#15803d]/10 blur-3xl" />
        <div className="absolute -bottom-24 -left-10 h-64 w-64 rounded-full bg-[#16a34a]/10 blur-3xl" />

        <div
          data-aos="fade-right"
          className="container mx-auto px-4 lg:px-8 py-20"
        >
          <div className="max-w-3xl">
            <span className="text-[#16a34a] font-bold tracking-[0.35em] uppercase text-xs">
              Product Catalog
            </span>

            <h1 className="mt-4 text-4xl md:text-5xl font-display font-bold text-[#15803d]">
              Explore Our Chemical Categories
            </h1>

            <p className="mt-4 text-lg text-[#475569] hidden md:block">
              Discover a curated lineup of chemical categories designed for
              industrial, pharmaceutical, and specialty requirements. Each card
              highlights the key focus, sub-category, and a quick summary to
              help you navigate faster.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-base font-semibold text-[#475569]">
                {sortedCategories.length} Categories
              </span>
              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-base font-semibold text-[#475569]">
                Since 2004
              </span>
              <span className="rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-base font-semibold text-[#475569]">
                Mumbai Distribution Hub
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Category Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {sortedCategories.map((category) => (
              <div
                data-aos="zoom-in-up"
                key={category.id || category.slug}
                className="group overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]"
              >
                <div className="relative h-56 overflow-hidden">
                  <Link href={`/products?category=${category.slug}`}>
                    <Image
                      src={category.image?.trim() || "/logo.png"}
                      alt={category.name}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                      fill
                      sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-[#020617]/20 to-transparent" />
                  </Link>
                </div>

                <div className="p-7">
                  <Link href={`/products?category=${category.slug}`}>
                    <h3 className="text-2xl font-display font-bold text-[#15803d] transition-colors group-hover:text-[#166534]">
                      {category.name}
                    </h3>
                  </Link>

                  <p className="mt-3 text-base leading-relaxed text-[#475569]">
                    {category.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between text-base font-semibold text-[#475569]">
                    <span>{countByCategory[category.slug] ?? 0} Products</span>

                    <Link
                      href={`/products?category=${category.slug}`}
                      className="inline-flex items-center gap-2 text-[#15803d] hover:text-[#166534]"
                    >
                      Explore
                      <span className="material-symbols-outlined text-base">
                        arrow_forward
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
