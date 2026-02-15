"use client";

import { useEffect, useState } from "react";

export default function BackToTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      id="backToTop"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={[
        "w-14 h-14 fixed bottom-8 left-8 bg-[#15803d] text-white flex items-center justify-center p-3 rounded-full shadow-2xl transition-all duration-300 z-50 hover:bg-green-700",
        show
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none",
      ].join(" ")}
      aria-label="Back to top"
    >
      <span className="material-symbols-outlined text-xl animate-bounce">
  arrow_upward
</span>

    </button>
  );
}
