// # Halaman utama (menggabungkan semua section)

// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      {/* Efek Noise Halus Global */}
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      {/* Section Utama */}
      <Hero />
      <About />
      
      {/* Section selanjutnya (Project & Contact) akan ditambahkan di langkah berikutnya */}
    </div>
  );
}