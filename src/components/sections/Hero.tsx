"use client";
import { motion } from "framer-motion";
import { Download, Mail, Github, Linkedin, Instagram } from "lucide-react"; // Import Icon Sosmed
import Button from "@/components/ui/Button";
import Badge from "@/components/ui/Badge";
import Image from "next/image";
import Link from "next/link"; // Jangan lupa import Link

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center px-6 pt-20 overflow-hidden">
      {/* Efek Glow Background */}
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
             <Image 
               src="/images/profile.jpeg" 
               alt="Afsal Prima Maula"
               fill
               className="object-cover"
               priority
             />
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
            IT Student <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-light via-gold to-gold-dim">Digital Luxury.</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-cream/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed"
          >
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
          {/* Tombol Download CV - Variant Gold */}
          <Button variant="gold" size="lg">
            Download CV <Download size={18} />
          </Button>

          {/* Tombol Pesan */}
          <Button 
            variant="outline" 
            size="lg"
            className="hover:border-gold hover:text-gold transition-colors duration-300"
          >
            <Mail size={18} />
          </Button>
        </motion.div>

        {/* SOCIAL MEDIA ICONS (BARU) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="flex items-center gap-8 mt-12 pt-8 border-t border-white/5 w-full max-w-xs justify-center"
        >
          {/* GitHub */}
          <Link 
            href="https://github.com/afsalprimamaula" // Ganti dengan link GitHub Anda
            target="_blank"
            className="text-cream/40 hover:text-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Github size={24} />
          </Link>

          {/* LinkedIn */}
          <Link 
            href="https://linkedin.com/in/afsalprimamaula" // Ganti dengan link LinkedIn Anda
            target="_blank"
            className="text-cream/40 hover:text-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Linkedin size={24} />
          </Link>

          {/* Instagram */}
          <Link 
            href="https://www.instagram.com/pmafsaal.e?igsh=MXc0cXlmejdqYnU0eg==" // Ganti dengan link Instagram Anda
            target="_blank"
            className="text-cream/40 hover:text-gold transition-all duration-300 hover:scale-110 hover:-translate-y-1"
          >
            <Instagram size={24} />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}