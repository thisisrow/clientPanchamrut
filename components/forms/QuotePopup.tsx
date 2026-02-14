"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import InquiryForm from "./InquiryForm";

const POPUP_EVENT = "open-quote-popup";

type PopupDetail = {
  productName?: string;
};

function getInitialState() {
  return { open: false, productName: "" };
}

export function openQuotePopup(productName?: string) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent<PopupDetail>(POPUP_EVENT, {
      detail: { productName },
    }),
  );
}

export default function QuotePopup() {
  const [mounted, setMounted] = useState(false);
  const [popup, setPopup] = useState(getInitialState);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = (event: Event) => {
      const custom = event as CustomEvent<PopupDetail>;
      setPopup({
        open: true,
        productName: custom.detail?.productName ?? "",
      });
    };

    window.addEventListener(POPUP_EVENT, handler);
    return () => window.removeEventListener(POPUP_EVENT, handler);
  }, []);

  useEffect(() => {
    if (!mounted) return;
    const timer = window.setTimeout(() => {
      setPopup((prev) => ({ ...prev, open: true }));
    }, 30000);

    return () => window.clearTimeout(timer);
  }, [mounted, pathname]);

  const portalRoot = useMemo(() => {
    if (!mounted) return null;
    return document.body;
  }, [mounted]);

  if (!mounted || !portalRoot) {
    return null;
  }

  const closePopup = () => setPopup((prev) => ({ ...prev, open: false }));

  return createPortal(
    popup.open ? (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4">
        <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white p-5 sm:p-8 shadow-2xl">

          <button
            data-aos="zoom-in"
            type="button"
            className="absolute right-3 top-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#15803d] text-white shadow-md"
            onClick={closePopup}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-sm">close</span>
          </button>

          <div data-aos="fade-right" className="mb-4 pr-8">
            <p className="text-xs uppercase tracking-[0.3em] text-[#16a34a] hidden md:block">
              Get a Quote
            </p>
            <h2 className="text-xl sm:text-2xl font-display font-bold text-[#0f172a] transition-all transform duration-300">
              Tell us what you need
            </h2>
            <p className="text-sm sm:text-base text-slate-500 hidden md:block">
              Share your requirement and we will get back quickly.
            </p>
          </div>

          <InquiryForm
            productName={popup.productName}
            source="popup"
            submitLabel="Send Request"
            onSubmitted={closePopup}
          />
        </div>
      </div>
    ) : null,
    portalRoot,
  );
}
