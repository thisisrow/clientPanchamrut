import type { Config } from "tailwindcss";

const config: Config = {
  // Use class-based dark mode so we can toggle dark/light explicitly via document.documentElement.classList
  darkMode: false,
  content: [
    "./app/**/*.{ts,tsx,js,jsx}",
    "./components/**/*.{ts,tsx,js,jsx}",
    "./pages/**/*.{ts,tsx,js,jsx}",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-jetbrains-mono)"],
        display: ["var(--font-outfit)"],
      },
      backgroundImage: {
        'contact-us': "url('/contactUs.png')",
      },
      colors: {
        /* Brand Greens */
        primary: "#15803d", // emerald-700
        primaryHover: "#166534", // emerald-800
        secondary: "#16a34a", // emerald-600
        accent: "#22c55e", // emerald-500

        /* Backgrounds */
        "background-light": "#f8fafc", // slate-50
        "background-dark": "#0f172a", // slate-900
        "surface-light": "#ffffff",
        "surface-dark": "#1e293b", // slate-800

        /* Text */
        "text-default": "#0f172a", // slate-900
        "text-secondary": "#475569", // slate-600
        "text-muted": "#94a3b8", // slate-400
        "text-inverse": "#ffffff",

        /* Borders & Dividers */
        "border-light": "#e2e8f0", // slate-200
        "border-dark": "#334155", // slate-700

        /* Status Colors */
        success: "#16a34a", // green-600
        warning: "#f59e0b", // amber-500
        error: "#dc2626", // red-600
        info: "#0ea5e9", // sky-500

        /* Overlays */
        "overlay-light": "rgba(255, 255, 255, 0.85)",
      },
    },
  },
  plugins: [],
};

export default config;
