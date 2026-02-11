import type { Metadata } from "next";
import "./globals.css";

import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";
import QuotePopup from "@/components/forms/QuotePopup";
import LearnMorePopup from "@/components/forms/LearnMorePopup";
import FloatingContact from "@/components/FloatingContact";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-inter",
});

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: "Panchamrut Chemicals | Trusted Chemical Trading & Supply",
  description:
    "Panchamrut Chemicals - Premier industrial chemical trader and supplier in Mumbai since 2004.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} bg-background-light text-default transition-colors duration-300`}
        suppressHydrationWarning
      >
        <Header />
        {children}
        <Footer />
        <QuotePopup />
        <LearnMorePopup />
        <BackToTop />
        <FloatingContact />
      </body>
    </html>
  );
}
