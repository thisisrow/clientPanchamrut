"use client";

import { useMemo, useState } from "react";
import { Product } from "./data";

type FilterSection = {
  title: string;
  icon: string;
  options: string[];
};

type FiltersSidebarProps = {
  products: Product[];
};

const iconByKey: Record<string, string> = {
  purity: "percent",
  form: "water_drop",
  grade: "science",
  application: "apartment",
  colour: "palette",
  color: "palette",
  packaging: "inventory_2",
};

function getIcon(key: string) {
  return iconByKey[key.toLowerCase()] ?? "filter_alt";
}

function buildFilters(products: Product[]): FilterSection[] {
  const map = new Map<string, Set<string>>();

  for (const product of products) {
    for (const attribute of product.attributes) {
      const key = attribute.label.trim();
      const value = attribute.value.trim();
      if (!key || !value) {
        continue;
      }
      const set = map.get(key) ?? new Set<string>();
      set.add(value);
      map.set(key, set);
    }
  }

  return Array.from(map.entries()).map(([key, values]) => ({
    title: key,
    icon: getIcon(key),
    options: Array.from(values).sort(),
  }));
}

export default function FiltersSidebar({ products }: FiltersSidebarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const filterSections = useMemo(() => buildFilters(products), [products]);

  const content = (
    <>
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-lg font-bold text-[#0f172a]">Filters</p>
          <p className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">
            Refine Your Catalog
          </p>
        </div>
        <span className="material-symbols-outlined text-[#94a3b8]">tune</span>
      </div>

      <div className="mt-6 space-y-5">
        {filterSections.length === 0 ? (
          <div className="rounded-xl border border-[#e2e8f0]/70 bg-[#f8fafc]/70 px-4 py-3 text-base text-[#475569]">
            No filters available yet.
          </div>
        ) : null}

        {filterSections.map((section) => (
          <details
            key={section.title}
            open
            className="rounded-xl border border-[#e2e8f0]/70 bg-[#f8fafc]/70 px-4 py-3"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between">
              <span className="flex items-center gap-2 text-base font-semibold text-[#0f172a]">
                <span className="material-symbols-outlined text-base text-[#15803d]">
                  {section.icon}
                </span>
                {section.title}
              </span>
              <span className="material-symbols-outlined text-base text-[#94a3b8]">
                expand_more
              </span>
            </summary>

            <div className="mt-3 space-y-2 text-base text-[#475569]">
              {section.options.map((option) => (
                <label
                  key={option}
                  className="flex items-center justify-between gap-3"
                >
                  <span className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[#e2e8f0] text-[#15803d] accent-[#15803d] focus:ring-2 focus:ring-[#22c55e]"
                    />
                    <span>{option}</span>
                  </span>
                </label>
              ))}
            </div>
          </details>
        ))}
      </div>
    </>
  );
  return (
    <div>
      <div className="md:hidden fixed top-24 left-0 right-0 z-40 px-4 justify-self-end">
        <button
          type="button"
          onClick={() => setMobileOpen(true)}
          className="  rounded-2xl border border-[#e2e8f0] bg-white/95 px-4 py-3 text-left text-base font-semibold text-[#0f172a] shadow-lg backdrop-blur"
        >
          <span className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#15803d]">
                tune
              </span>
              Filters
            </span>
            <span className="material-symbols-outlined text-[#94a3b8]">
              chevron_right
            </span>
          </span>
        </button>
      </div>

      <aside className="hidden md:block h-fit rounded-2xl border border-[#e2e8f0] bg-[#ffffff] p-6 shadow-[0_20px_50px_-35px_rgba(15,23,42,0.35)]">
        {content}
      </aside>

      <div
        className={`fixed inset-0 z-50 md:hidden transition-opacity ${
          mobileOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/40"
          onClick={() => setMobileOpen(false)}
          aria-label="Close filters"
        />
        <div
          className={`absolute right-0 top-0 h-full w-[85%] max-w-sm transform bg-white p-6 shadow-2xl transition-transform ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="sticky top-0 z-10 flex items-center justify-between bg-white pb-4">
            <div>
              <p className="text-lg font-bold text-[#0f172a]">Filters</p>
              <p className="text-[11px] uppercase tracking-[0.2em] text-[#94a3b8]">
                Refine Your Catalog
              </p>
            </div>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-[#e2e8f0] text-[#475569]"
              aria-label="Close filters"
            >
              <span className="material-symbols-outlined text-base">close</span>
            </button>
          </div>
          <div className="mt-2">{content}</div>
        </div>
      </div>
    </div>
  );
}
