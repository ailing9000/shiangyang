import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#1A5C2A",
          mid: "#2d7a3a",
          light: "#e8f5e1",
        },
        amber: {
          brand: "#c8860a",
          light: "#fff8e8",
        },
      },
      fontFamily: {
        sans: ["var(--font-noto)", "Noto Sans TC", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
