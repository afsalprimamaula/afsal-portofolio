"use client";
import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionHeading({ 
  title, 
  subtitle, 
  className = "" 
}: SectionHeadingProps) {
  return (
    <div className={`text-center mb-16 ${className}`}>
      {/* Animasi Subtitle (Muncul duluan) */}
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-gold text-xs md:text-sm font-bold tracking-[0.2em] uppercase mb-3"
        >
          {subtitle}
        </motion.p>
      )}

      {/* Animasi Title Utama */}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-3xl md:text-5xl font-bold text-cream"
      >
        {title} <span className="text-gold">.</span>
      </motion.h2>
      
      {/* Garis Dekorasi Bawah */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="h-1 w-24 bg-gold/30 mx-auto mt-6 rounded-full"
      />
    </div>
  );
}