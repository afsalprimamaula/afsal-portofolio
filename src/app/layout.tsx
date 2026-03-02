// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode } from "react"; 
import "@/app/globals.css"; // Menggunakan alias @ yang sudah diperbaiki
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";

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
  children: ReactNode;
}) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${jakarta.variable} font-sans antialiased bg-forest-main text-cream`}>
        <Navbar />
        <main className="relative min-h-screen pb-24 md:pb-0">
          {children}
        </main>
        <BottomNav />
      </body>
    </html>
  );
}