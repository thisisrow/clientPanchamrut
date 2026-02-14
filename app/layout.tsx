import type { Metadata } from "next";
import "./globals.css";

import { Inter, Outfit } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SubFooter from "@/components/SubFooter";
import BackToTop from "@/components/BackToTop";
import QuotePopup from "@/components/forms/QuotePopup";
import LearnMorePopup from "@/components/forms/LearnMorePopup";

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
  title:
    "Trader - Retailer of Industrial Chemicals & Chemical Compounds by Panchamrut Chemicals, Mumbai",
  description:
    "Panchamrut Chemicals - Trader and retailer of industrial chemicals, chemical compounds and organic compounds from Mumbai, Maharashtra, India.",
  keywords: [
    "Industrial Chemicals",
    "Chemical Compounds",
    "Organic Compounds",
    "Pharmaceutical Excipients",
    "Salts and Acids",
    "Artificial Sweeteners",
    "Panchamrut Chemicals",
    "Mumbai",
  ],
  openGraph: {
    title:
      "Trader - Retailer of Industrial Chemicals & Chemical Compounds by Panchamrut Chemicals, Mumbai",
    description:
      "Panchamrut Chemicals - Trader and retailer of industrial chemicals, chemical compounds and organic compounds from Mumbai, Maharashtra, India.",
    url: "https://www.panchamrutchemicals.com/",
    siteName: "panchamrutchemicals.com",
    images: [
      {
        url: "https://www.panchamrutchemicals.com/logo.png",
      },
    ],
    type: "website",
  },
  twitter: {
    card: "summary",
    title:
      "Trader - Retailer of Industrial Chemicals & Chemical Compounds by Panchamrut Chemicals, Mumbai",
    description:
      "Panchamrut Chemicals - Trader and retailer of industrial chemicals, chemical compounds and organic compounds from Mumbai, Maharashtra, India.",
    images: ["https://www.panchamrutchemicals.com/logo.png"],
  },
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
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
        <SubFooter/>
        <QuotePopup />
        <LearnMorePopup />
        <BackToTop />
      </body>
    </html>
  );
}
