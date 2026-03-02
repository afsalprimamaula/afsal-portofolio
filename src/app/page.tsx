// src/app/page.tsx
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects"; // Tambahkan ini

export default function Home() {
  return (
    <div className="relative flex flex-col w-full">
      <div className="fixed inset-0 pointer-events-none z-[1] opacity-[0.03] bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
      
      <Hero />
      <About />
      <Projects /> {/* Tambahkan ini */}
      
      {/* <Contact /> akan menyusul di langkah terakhir */}
    </div>
  );
}