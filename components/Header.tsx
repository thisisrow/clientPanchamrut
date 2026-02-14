"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Update background opacity/shadow based on top position
      setIsAtTop(currentScrollY < 10);

      // Determine scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setScrollDirection("down");
      } else {
        setScrollDirection("up");
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/catagory", label: "Catagory" },
    { href: "/products", label: "Products" },
    { href: "/aboutus", label: "About Us" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"
      } ${
        isAtTop
          ? "bg-white py-4"
          : "bg-white/80 backdrop-blur-md shadow-sm py-2"
      }`}
    >
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.png" alt="Logo" width={40} height={40} />
            <div className="hidden sm:block leading-tight">
              <span className="block font-bold text-[#15803d] uppercase">
                Panchamrut
              </span>
              <span className="text-xs text-slate-500 uppercase tracking-widest">
                Chemicals
              </span>
            </div>
          </Link>

          {/* Desktop Nav with Hover Underline */}
          <div className="hidden md:flex items-center gap-8 ">
            {navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative group py-2 text-sm font-semibold text-slate-600 hover:text-[#15803d] transition-colors"
                >
                  {item.label}
                  {/* Animated Underline */}
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-[#15803d] transition-all duration-300 ${active ? "w-full" : "w-0 group-hover:w-full"}`}
                  />
                </Link>
              );
            })}
          </div>

          {/* Action Button */}
          <div className="flex items-center gap-4">
            <Link
              href="/contact"
              className="hidden md:block bg-[#15803d] text-white px-6 py-2 rounded-full font-medium hover:bg-[#16a34a] transform hover:scale-105 transition-all active:scale-95"
            >
              Enquire Now
            </Link>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 text-slate-600"
            >
              {mobileOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="overflow-hidden md:hidden bg-white rounded-2xl mt-2 shadow-xl"
            >
              <div className="flex flex-col p-4 gap-2">
                {navItems.map((item, idx) => (
                  <motion.div
                    key={item.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <Link
                      href={item.href}
                      className="block p-3 rounded-xl hover:bg-slate-50 text-slate-700 font-medium"
                      onClick={() => setMobileOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </header>
  );
}
function MenuIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4 6h16M4 12h16M4 18h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="h-6 w-6 text-slate-700"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18M6 6l12 12" />
    </svg>
  );
}
