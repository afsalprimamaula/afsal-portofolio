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
        forest: {
          main: "#2D3A30",
          light: "#3A4B3D",
          card: "#344338",
        },
        // UPDATE: Warna Gold
        gold: {
          DEFAULT: "#D4AF37", // Default gold (untuk bg-gold/text-gold)
          main: "#D4AF37",
          light: "#E5C558",
          dim: "#B08D26",
        },
        cream: "#FDFBF7",
      },
      fontFamily: {
        sans: ["var(--font-jakarta)"],
      },
    },
  },
  plugins: [],
};
export default config;