export default function Footer() {
  return (
    <footer className="py-8 text-center border-t border-white/5 bg-forest-main relative z-10">
      <div className="flex flex-col items-center gap-2">
        <p className="text-cream/40 text-sm">
          © {new Date().getFullYear()} Afsal Prima Maula. All rights reserved.
        </p>
        <p className="text-[10px] text-cream/20 uppercase tracking-widest">
          Designed with <span className="text-gold-main">Luxury</span> in Mind
        </p>
      </div>
    </footer>
  );
}