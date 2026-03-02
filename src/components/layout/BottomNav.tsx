// # Navigasi bawah ala Mobile App (PENTING)

"use client";
import { Home, User, Briefcase, Mail } from "lucide-react";
import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
      <div className="flex items-center justify-around bg-forest-card/80 backdrop-blur-xl border border-white/10 p-4 rounded-3xl shadow-2xl">
        {/* Navigasi Home */}
        <Link href="#home" className="flex flex-col items-center gap-1 text-gold-main">
          <Home size={20} />
          <span className="text-[10px] font-bold">Home</span>
        </Link>
        {/* Navigasi About */}
        <Link href="#about" className="flex flex-col items-center gap-1 text-cream/50 hover:text-gold-main transition-colors">
          <User size={20} />
          <span className="text-[10px]">About</span>
        </Link>
        {/* Navigasi Projects */}
        <Link href="#projects" className="flex flex-col items-center gap-1 text-cream/50 hover:text-gold-main transition-colors">
          <Briefcase size={20} />
          <span className="text-[10px]">Projects</span>
        </Link>
        {/* Navigasi Contact */}
        <Link href="#contact" className="flex flex-col items-center gap-1 text-cream/50 hover:text-gold-main transition-colors">
          <Mail size={20} />
          <span className="text-[10px]">Contact</span>
        </Link>
      </div>
    </nav>
  );
}