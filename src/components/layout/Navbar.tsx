"use client";
import Link from "next/link";

const navItems = [
  { name: "Home", path: "#home" },
  { name: "About Me", path: "#about" },
  { name: "Project", path: "#projects" },
  { name: "Blog", path: "#blog" },
  { name: "Contact", path: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 hidden md:block">
      <nav className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between backdrop-blur-md border-b border-white/5 bg-forest-main/60">
        <Link href="/" className="text-xl font-bold tracking-tighter text-cream uppercase">
          AFSAL PRIMA <span className="text-gold-main">MAULA</span>
        </Link>

        <div className="flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.name}
              href={item.path}
              className="text-sm font-medium text-cream/70 hover:text-gold-main transition-colors relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold-main transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
          <Link 
            href="#contact" 
            className="ml-4 px-5 py-2 rounded-full border border-gold-main/50 text-gold-main text-xs font-bold hover:bg-gold-main hover:text-forest-main transition-all"
          >
            LET'S TALK
          </Link>
        </div>
      </nav>
    </header>
  );
}