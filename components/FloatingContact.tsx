"use client";

import Link from "next/link";

const contacts = [
  {
    label: "Call us",
    href: "tel:+919870795121",
    bg: "bg-[#15803d]",
    icon: "/call.png",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/919870795121",
    bg: "bg-[#22c55e]",
    icon: "/whatsapp.png",
  },
  {
    label: "Email",
    href: "mailto:info@panchamrutchemicals.com",
    bg: "bg-[#0f172a]",
    icon: "/email.png",
  },
];

export default function FloatingContact() {
  return (
    <div className="fixed bottom-4 left-4 z-50 flex flex-col gap-2">
      {contacts.map((item) => (
        <Link
          key={item.href}
          href={item.href}
          className={`${item.bg} text-white shadow-lg rounded-full px-4 py-2 text-sm font-semibold hover:brightness-110 transition flex items-center gap-2`}
          prefetch={false}
        >
          <img
            src={item.icon}
            alt="Panchamrut logo"
            className="h-6 w-6 rounded-full bg-white"
          />
          <span>{item.label}</span>
        </Link>
      ))}
    </div>
  );
}
