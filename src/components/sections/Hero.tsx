// # Bagian intro "Building Digital Luxury"

// src/components/sections/Hero.tsx
"use client";
import { motion } from "framer-motion";
import { Download, Mail } from "lucide-react";
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Efek Glow di belakang foto profil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-gold-main/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto space-y-10">
        
        {/* Foto Profil & Badge Status */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative group"
        >
          <div className="relative w-40 h-40 md:w-48 md:h-48 rounded-3xl overflow-hidden border border-white/10 bg-forest-card shadow-2xl">
             <div className="w-full h-full bg-forest-light flex items-center justify-center text-cream/20 italic">
                {/* Image placeholder */}
                Profile Photo
             </div>
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
            <span className="text-gold-main text-xs font-bold tracking-[0.3em] uppercase bg-gold-main/10 px-4 py-2 rounded-full border border-gold-main/20">
              V-Shape Developer
            </span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold text-cream leading-[1.1]"
          >
            Building <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold-main to-gold-dim">Digital Luxury.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Mahasiswa IT yang mengubah ide kompleks menjadi pengalaman UI/UX yang mahal, interaktif, dan modern.
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <Button variant="primary" size="lg" className="shadow-lg shadow-gold-main/20">
            Download CV <Download size={18} />
          </Button>
          <Button variant="outline" size="lg">
            <Mail size={18} />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}