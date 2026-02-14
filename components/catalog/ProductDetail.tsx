"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Category,
  formatPrice,
  Product,
  supportPhoneDisplay,
  supportPhoneLink,
} from "./data";
import RelatedProducts from "./RelatedProducts";
import { openQuotePopup } from "@/components/forms/QuotePopup";
type ProductDetailProps = {
  product: Product;
  category?: Category;
  relatedProducts: Product[];
};

export default function ProductDetail({
  product,
  category,
  relatedProducts,
}: ProductDetailProps) {
  const gallery = useMemo(() => {
    const images = [product.image, ...product.gallery].filter(Boolean);
    return Array.from(new Set(images));
  }, [product.image, product.gallery]);
  const [activeImage, setActiveImage] = useState(gallery[0] ?? product.image);
  const [shareMessage, setShareMessage] = useState<string>("");

  const stockLabel =
    product.stockStatus === "Available"
      ? "Available in stock"
      : product.stockStatus === "Limited"
        ? "Limited availability"
        : "Out of stock";

  const stockBadgeClass =
    product.stockStatus === "Available"
      ? "bg-[#f0fdf4] text-[#15803d]" // success bg + primary text
      : product.stockStatus === "Limited"
        ? "bg-[#fffbeb] text-[#f59e0b]" // warning bg + warning text
        : "bg-[#fef2f2] text-[#dc2626]"; // error bg + error text

  return (
    <main className="bg-[#f8fafc]">
      <section className="py-14">
        <div className="container mx-auto px-4 lg:px-8">
          <div data-aos="fade-right" className="flex flex-wrap items-center gap-2 text-base text-[#94a3b8]">
            <Link href="/products" className="hover:text-[#15803d]">
              Products
            </Link>
            <span>/</span>

            {category ? (
              <Link
                href={`/products?category=${category.slug}`}
                className="hover:text-[#15803d]"
              >
                {category.name}
              </Link>
            ) : (
              <span>Category</span>
            )}

            <span>/</span>
            <span className="font-medium text-[#0f172a]">{product.name}</span>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.15fr]">
            <div className="space-y-6">
              <div className="relative overflow-hidden rounded-3xl border border-[#e2e8f0] bg-white shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)]">
                <img
                  alt={product.name}
                  src={activeImage}
                  className="h-[420px] w-full object-cover"
                />

                <div className="absolute right-5 top-5 flex flex-col gap-3">
                  <button
                    type="button"
                    className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-white/90 text-[#475569] shadow transition-colors hover:text-[#15803d]"
                    onClick={async () => {
                      try {
                        setShareMessage("");
                        const url = window.location.href;
                        if (navigator.share) {
                          await navigator.share({
                            title: product.name,
                            text: product.shortDescription || product.name,
                            url,
                          });
                          return;
                        }
                        if (navigator.clipboard) {
                          await navigator.clipboard.writeText(url);
                          setShareMessage("Link copied!");
                          return;
                        }
                        window.open(url, "_blank", "noopener,noreferrer");
                      } catch {
                        setShareMessage("Unable to share right now.");
                      }
                    }}
                  >
                    <span className="material-symbols-outlined pointer-events-none text-base">
                      share
                    </span>
                  </button>
                </div>
              </div>
              {shareMessage ? (
                <p className="text-xs text-[#475569]">{shareMessage}</p>
              ) : null}

              <div className="grid grid-cols-4 gap-3">
                {gallery.map((image, index) => {
                  const isActive = image === activeImage;
                  return (
                    <button
                      key={`${product.slug}-gallery-${index}`}
                      type="button"
                      onClick={() => setActiveImage(image)}
                      className={`overflow-hidden rounded-2xl border bg-white transition-all ${
                        isActive
                          ? "border-[#15803d] ring-2 ring-[#15803d]/30"
                          : "border-[#e2e8f0] hover:border-[#15803d]/60"
                      }`}
                      aria-label={`View ${product.name} image ${index + 1}`}
                    >
                      <img
                        alt={`${product.name} view ${index + 1}`}
                        src={image}
                        className="h-20 w-full object-cover"
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            <div  className="space-y-6">
              <div data-aos="fade-right"
                className={`inline-flex items-center gap-2 rounded-full px-4 py-1 text-xs font-semibold ${stockBadgeClass}`}
              >
                <span className="material-symbols-outlined text-base">
                  check_circle
                </span>
                {stockLabel}
              </div>

              <div>
                <h1 data-aos="fade-right" className="text-4xl font-display font-bold text-[#0f172a]">
                  {product.name}
                </h1>

                <div data-aos="fade-right" className="mt-3 flex flex-wrap items-center gap-4">
                  <span  className="text-3xl font-bold text-[#15803d]">
                    {formatPrice(product)}
                  </span>

                  <button
                    onClick={() => openQuotePopup(product.name)}
                    className="text-base font-semibold text-[#475569] underline decoration-dashed underline-offset-4 hover:text-[#15803d]"
                  >
                    Get Latest Price
                  </button>
                </div>

                <p data-aos="fade-right" className="mt-4 text-base leading-relaxed text-[#475569]">
                  {product.description}
                </p>
              </div>

              <div  className="grid grid-cols-1 gap-4 rounded-2xl border border-[#e2e8f0] bg-white p-5 sm:grid-cols-2">
                {product.attributes.map((attribute) => (
                  <div key={attribute.label} className="space-y-1">
                    <p data-aos="fade-right" className="text-xs uppercase tracking-[0.2em] text-[#16a34a]">
                      {attribute.label}
                    </p>
                    <p data-aos="fade-right" className="text-base font-semibold text-[#0f172a]">
                      {attribute.value}
                    </p>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <button
                 onClick={() => openQuotePopup(product.name)}
                  className="inline-flex items-center justify-center rounded-full bg-[#15803d] px-6 py-3 text-base font-semibold text-white transition-colors hover:bg-[#166534]"
                >
                  Get Quote
                </button>

                <a 
                  href={`tel:${supportPhoneLink}`}
                  className="inline-flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white px-6 py-3 text-base font-semibold text-[#475569] transition-colors hover:border-[#15803d] hover:text-[#15803d]"
                >
                  Call Now
                </a>

                <div className="flex items-center gap-2 text-base text-[#475569]">
                  <span className="material-symbols-outlined text-base text-[#15803d]">
                    call
                  </span>
                  {supportPhoneDisplay}
                </div>
              </div>

              <div className="flex flex-wrap gap-4 text-xs font-semibold text-[#475569]">
                {[
                  "Trusted Supplier",
                  "Fast Delivery",
                  "Quality Documentation",
                ].map((label) => (
                  <div data-aos="zoom-in-up"
                    key={label}
                    className="flex items-center gap-2 rounded-full border border-[#e2e8f0] bg-white px-4 py-2"
                  >
                    <span className="material-symbols-outlined text-base text-[#15803d]">
                      verified
                    </span>
                    {label}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[#e2e8f0] bg-white py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <RelatedProducts
            title={`More from ${category?.name ?? "this category"}`}
            products={relatedProducts}
          />
        </div>
      </section>
    </main>
  );
}
