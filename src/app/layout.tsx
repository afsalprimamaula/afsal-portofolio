// src/app/layout.tsx
import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode } from "react"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer"; // Import Footer

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Afsal Prima Maula | V-Shape Developer",
  description: "Portofolio Digital Luxury Afsal Prima Maula. Membangun pengalaman web yang mahal, interaktif, dan modern.",
  openGraph: {
    title: "Afsal Prima Maula | V-Shape Developer",
    description: "Building Digital Luxury. Spesialis UI/UX dan Modern Web Development.",
    url: "https://afsal.dev", // Ganti dengan domain asli Anda nanti
    siteName: "Afsal Portfolio",
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Afsal Prima Maula | Portfolio",
    description: "Building Digital Luxury.",
  },
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
        <Footer /> {/* Footer ditambahkan di sini */}
        <BottomNav />
      </body>
    </html>
  );
}