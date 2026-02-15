"use client";

import { useEffect, useMemo, useState } from "react";
import { createPortal } from "react-dom";
import InquiryForm from "./InquiryForm";

const LEARN_MORE_EVENT = "open-learn-more-popup";

export function openLearnMorePopup() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(LEARN_MORE_EVENT));
}

export default function LearnMorePopup() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener(LEARN_MORE_EVENT, handler);
    return () => window.removeEventListener(LEARN_MORE_EVENT, handler);
  }, []);

  const portalRoot = useMemo(() => {
    if (!mounted) return null;
    return document.body;
  }, [mounted]);

  if (!mounted || !portalRoot) {
    return null;
  }

  const closePopup = () => setOpen(false);

  return createPortal(
    open ? (
      <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/40 px-4">
        <div className="relative w-full max-w-2xl rounded-3xl bg-white p-6 shadow-2xl">
          <button
            data-aos="zoom-in"
            type="button"
            className="absolute right-3 top-3 w-9 h-9 flex items-center justify-center rounded-full bg-[#15803d] text-white shadow-md"
            onClick={closePopup}
            aria-label="Close"
          >
            <span className="material-symbols-outlined text-base">close</span>
          </button>
          <div data-aos="fade-right" className="mb-4">
            <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
              Learn More
            </p>
            <h2 className="text-2xl font-display font-bold text-slate-900">
              Tell us what you want to know
            </h2>
            <p className="text-sm text-slate-500">
              Share your requirement and we will get back to you shortly.
            </p>
          </div>
          <InquiryForm
            source="learn-more"
            submitLabel="Send Request"
            onSubmitted={closePopup}
          />
        </div>
      </div>
    ) : null,
    portalRoot,
  );
}
