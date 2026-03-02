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
        // Palet Digital Luxury (Deep Forest & Gold)
        forest: {
          main: "#2D3A30", // Background Utama
          card: "#3A4B3D", // Warna Kartu/Surface
          light: "#4B5F50", // Border atau Hover
        },
        gold: {
          main: "#D4AF37", // Metallic Gold
          dim: "#C5A028",  // Hover Gold
          light: "#EACF70", // Highlight
        },
        cream: {
          DEFAULT: "#FDFBF7", // Teks Utama
          muted: "#D1D6D3",   // Teks Sekunder
        }
      },
      fontFamily: {
        // Kita hubungkan dengan variable CSS yang ada di layout.tsx
        sans: ["var(--font-jakarta)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;