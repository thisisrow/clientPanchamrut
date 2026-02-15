"use client";

import Link from "next/link";
import Image from "next/image";
import { formatPrice, Product, supportPhoneLink } from "./data";
import { openQuotePopup } from "@/components/forms/QuotePopup";

type ProductCardProps = {
  product: Product;
  showActions?: boolean;
};

export default function ProductCard({
  product,
  showActions = true,
}: ProductCardProps) {
  const imageSrc = product.image?.trim() || "/logo.png";

  return (
    <div data-aos="zoom-in-up" className="group overflow-hidden rounded-3xl border border-[#e2e8f0] bg-[#ffffff] shadow-[0_24px_60px_-40px_rgba(15,23,42,0.35)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_30px_80px_-40px_rgba(15,23,42,0.45)]">
      <div className="relative h-56 overflow-hidden">
        <Link href={`/products/${product.slug}`} className="block h-full">
          <Image
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            src={imageSrc}
            fill
            sizes="(min-width: 1280px) 33vw, (min-width: 768px) 50vw, 100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/60 via-[#0f172a]/20 to-transparent" />
          <span className="absolute left-5 top-5 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-[#0f172a] shadow">
            {product.stockStatus}
          </span>
        </Link>
      </div>

      <div className="p-6">
        <Link href={`/products/${product.slug}`}>
          <h3 className="text-xl font-display font-bold text-[#15803d] transition-colors group-hover:text-[#166534]">
            {product.name}
          </h3>
        </Link>

        <p className="mt-2 text-lg font-semibold text-[#15803d]">
          {formatPrice(product)}
        </p>

        <p className="mt-3 text-base leading-relaxed text-[#475569]">
          {product.shortDescription}
        </p>

        {showActions ? (
          <div className="mt-6 flex flex-wrap gap-3">
            <button
              type="button"
              onClick={() => openQuotePopup(product.name)}
              className="inline-flex items-center justify-center rounded-full bg-[#15803d] px-4 py-2 text-base font-semibold text-white transition-colors hover:bg-[#166534]"
            >
              Get Quote
            </button>

            <a
              href={`tel:${supportPhoneLink}`}
              className="inline-flex items-center justify-center rounded-full border border-[#e2e8f0] bg-white px-4 py-2 text-base font-semibold text-[#475569] transition-colors hover:border-[#15803d] hover:text-[#15803d]"
            >
              Call Now
            </a>
          </div>
        ) : null}
      </div>
    </div>
  );
}
