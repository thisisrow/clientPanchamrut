"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true, // Only animate once as you scroll down
      easing: "ease-out-quad",
    });
  }, []);

  return <>{children}</>;
};