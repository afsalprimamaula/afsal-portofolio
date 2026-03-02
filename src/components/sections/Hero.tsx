"use client";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Efek Glow di belakang */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
        
        {/* Foto Profil */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border border-white/10 bg-forest-card shadow-2xl">
             {/* Pastikan file foto ada di public/images/profile.png */}
             {/* Jika belum ada, gunakan div placeholder di bawah ini: */}
             <div className="w-full h-full bg-forest-light flex items-center justify-center text-cream/20 italic">
                Profile Photo
             </div>
             {/* <Image 
               src="/images/profile.png" 
               alt="Afsal Prima Maula"
               fill
               className="object-cover"
             /> 
             */}
          </div>
          <div className="absolute -bottom-4 left-1/2 -translate-x-1/2">
             <Badge>Available for work</Badge>
          </div>
        </motion.div>

        {/* Headline & Branding */}
        <div className="space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            {/* UPDATE: Sub-Header Baru */}
            <span className="text-gold text-xs font-bold tracking-[0.3em] uppercase bg-gold/10 px-4 py-2 rounded-full border border-gold/20">
              📚 Education | AI | Coding | Finance
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1]"
          >
            {/* UPDATE: Headline "IT Student" */}
            IT Student <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dim">Digital Luxury.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            {/* UPDATE: Deskripsi Baru */}
            Teknologi baru seperti AI, IoT, dan Blockchain membentuk masa depan, jadilah bagian dari inovasi tersebut.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* UPDATE: Tombol Download CV (Background Gold) */}
          <Button 
            size="lg" 
            className="bg-gold text-forest-main hover:bg-gold/90 border-none shadow-lg shadow-gold/20 font-bold"
          >
            Download CV <Download size={18} />
          </Button>

          {/* UPDATE: Tombol Pesan (Hover Border Gold) */}
          <Button 
            variant="outline" 
            size="lg"
            className="border-white/20 text-cream hover:border-gold hover:text-gold transition-all duration-300"
          >
            <Mail size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}