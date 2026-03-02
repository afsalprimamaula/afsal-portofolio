// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode } from "react"; 
import "./globals.css"; 

// Konfigurasi Font Plus Jakarta Sans
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Afsal Prima Maula | V-Shape Developer",
  description: "Portofolio Digital Luxury dengan Next.js 15",
};

export default function RootLayout({
  children,
}: {
  children: ReactNode; // 3. Gunakan ReactNode yang sudah diimport
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-forest-main text-cream`}>
        {/* Konten utama website */}
        <main className="relative min-h-screen">
          {children}
        </main>
      </body>
    </html>
  );
}