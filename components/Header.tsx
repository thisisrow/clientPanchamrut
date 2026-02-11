"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction
  const [lastScrollY, setLastScrollY] = useState(0); // Store last scroll position

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/catagory", label: "Catagory" },
    { href: "/products", label: "Products" },
    { href: "/aboutus", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  // Handle scroll event to determine direction
  const handleScroll = () => {
    if (typeof window !== "undefined") {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY) {
        setScrollDirection("down"); // Scrolling down
      } else {
        setScrollDirection("up"); // Scrolling up
      }

      setLastScrollY(currentScrollY);
    }
  };

  // Add scroll event listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`sticky top-0 z-50 border-b border-border-light bg-surface-light/95 backdrop-blur transition-transform duration-300 ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8" aria-label="Primary">
        <div className="flex h-20 items-center justify-between gap-4">
          <Link
            href="/"
            className="flex items-center gap-3"
            aria-label="Panchamrut home"
            onClick={() => setMobileOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Panchamrut logo"
              width={50}
              height={50}
              priority
              className="h-15 w-15"
            />
            <div className="leading-none">
              <div className="font-display text-2xl font-extrabold tracking-tight text-[#15803d] uppercase">
                Panchamrut
              </div>
              <div className=" text-lg tracking-wider text-slate-500 uppercase">
                Chemicals Pvt Ltd
              </div>
            </div>
          </Link>

          <div className="hidden md:flex items-center justify-center gap-10 text-base md:text-lg font-medium text-slate-600">
            {navItems.map((item) => {
              const active =
                item.href === "/"
                  ? pathname === "/"
                  : pathname.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "transition-colors hover:text-[#15803d] ",
                    active ? "text-[#15803d] " : "",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="/contact"
              className="hidden md:inline-flex items-center justify-center rounded-full bg-[#15803d] px-5 py-2.5 text-base font-semibold text-white shadow-sm hover:bg[#16a34a] transition-colors"
            >
              Enquire Now
            </Link>

            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full hover:bg-slate-100 transition-colors"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {mobileOpen ? (
          <div className="md:hidden pb-4">
            <div className="rounded-2xl border border-border-light bg-surface-light p-4">
              <div className="flex flex-col gap-2 text-base font-medium">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="rounded-lg px-3 py-2 text-slate-700 hover:bg-slate-100 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-[#15803d] px-5 py-2.5 text-base font-semibold text-white hover:bg-[#166534] transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                Enquire Now
              </Link>
            </div>
          </div>
        ) : null}
      </nav>
    </header>
  );
}

function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-5 w-5 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
