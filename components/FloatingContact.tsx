"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const message = encodeURIComponent("Hi I want to know about your product");
const subject = encodeURIComponent("Product Inquiry");

const contacts = [
  {
    label: "Call us",
    href: "tel:+919870795121",
    bg: "bg-[#15803d]",
    icon: "/call.png",
  },
  {
    label: "WhatsApp",
    href: `https://wa.me/919870795121?text=${message}`,
    bg: "bg-[#22c55e]",
    icon: "/whatsapp.png",
  },
  {
    label: "Email",
    href: `mailto:info@panchamrutchemicals.com?subject=${subject}&body=${message}`,
    bg: "bg-[#0f172a]",
    icon: "/email.png",
  },
];

export default function FloatingContact() {
  const [active, setActive] = useState(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    const interval = setInterval(() => {
      if (!pausedRef.current) {
        setActive((prev) => (prev + 1) % contacts.length);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed bottom-4 right-0 z-50 flex flex-col gap-2">
      {contacts.map((item, index) => (
        <Link
          key={item.href}
          href={item.href}
          prefetch={false}
          onMouseEnter={() => (pausedRef.current = true)}
          onMouseLeave={() => (pausedRef.current = false)}
          className={`
            ${item.bg}
            group flex items-center
            rounded-l-full shadow-lg
            pl-3 pr-1 py-1
            w-fit self-end
          `}
        >
          {/* TEXT */}
          <span
            className={`
              whitespace-nowrap overflow-hidden
              text-sm md:text-lg font-semibold text-white
              transition-all duration-500 ease-in-out
              ${
                active === index
                  ? "max-w-[160px] opacity-100 mr-2"
                  : "max-w-0 opacity-0 mr-0"
              }
              group-hover:max-w-[160px] group-hover:opacity-100 group-hover:mr-2
            `}
          >
            {item.label}
          </span>

          {/* ICON */}
          <Image
            src={item.icon}
            alt={item.label}
            width={40}
            height={40}
            className="h-10 w-10 md:h-12 md:w-12 rounded-full bg-white p-1 shrink-0"
          />
        </Link>
      ))}
    </div>
  );
}
