import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { ReactNode } from "react"; 
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import BottomNav from "@/components/layout/BottomNav";
import Footer from "@/components/layout/Footer";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  // UPDATE: Judul Metadata Baru
  title: "Afsal Prima Maula | Portofolio",
  description: "Portofolio Digital Luxury Afsal Prima Maula. IT Student & Future Innovator.",
  openGraph: {
    title: "Afsal Prima Maula | Portofolio",
    description: "Building Digital Luxury. IT Student & Future Innovator.",
    url: "https://afsal.dev",
    siteName: "Afsal Portfolio",
    locale: "id_ID",
    type: "website",
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
        <main className="relative min-h-screen">
          {children}
        </main>
        <Footer />
        <BottomNav />
      </body>
    </html>
  );
}