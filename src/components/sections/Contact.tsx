"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Mail, MapPin, MessageCircle, Github, Linkedin, Instagram } from "lucide-react";
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulasi pengiriman
    await new Promise((resolve) => setTimeout(resolve, 2000));
    alert(`Thank you, ${formData.name}! Your message has been sent.`);
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Kolom Kiri: Informasi Kontak */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-bold text-cream">
              Let's <span className="text-gold">Talk.</span>
            </h2>
            <p className="text-cream/60 leading-relaxed max-w-md">
              Tertarik berkolaborasi atau membangun sesuatu yang luar biasa? Saya selalu terbuka untuk diskusi proyek baru.
            </p>
          </div>

          <div className="space-y-5">
            {/* EMAIL */}
            <Card className="flex items-center gap-4 bg-white/5 border-white/5 p-4 hover:border-gold/30 transition-colors group">
              <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-forest-main transition-all duration-300">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">Email</p>
                <a href="mailto:afsalprimaamaulaa@gmail.com" className="text-cream font-medium hover:text-gold transition-colors">
                  afsalprimaamaulaa@gmail.com
                </a>
              </div>
            </Card>

            {/* WHATSAPP (BARU) */}
            <Card className="flex items-center gap-4 bg-white/5 border-white/5 p-4 hover:border-gold/30 transition-colors group">
              <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-forest-main transition-all duration-300">
                <MessageCircle size={20} />
              </div>
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">WhatsApp</p>
                <a 
                  href="https://wa.me/6282119238506" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-cream font-medium hover:text-gold transition-colors"
                >
                  Chat via WhatsApp
                </a>
              </div>
            </Card>
            
            {/* LOCATION */}
            <Card className="flex items-center gap-4 bg-white/5 border-white/5 p-4 hover:border-gold/30 transition-colors group">
              <div className="p-3 rounded-full bg-gold/10 text-gold group-hover:bg-gold group-hover:text-forest-main transition-all duration-300">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-cream/40 uppercase tracking-widest font-bold">Location</p>
                <p className="text-cream font-medium">Bandung, Indonesia</p>
              </div>
            </Card>
          </div>

          {/* SOCIAL MEDIA ICONS (BARU) */}
          <div className="pt-8 border-t border-white/5">
            <p className="text-sm text-cream/40 mb-4">Connect with me:</p>
            <div className="flex items-center gap-6">
              <Link 
                href="https://github.com/afsalprimamaula" 
                target="_blank"
                className="text-cream/60 hover:text-gold hover:scale-110 transition-all duration-300"
              >
                <Github size={24} />
              </Link>
              <Link 
                href="https://linkedin.com/in/afsalprimamaula" 
                target="_blank"
                className="text-cream/60 hover:text-gold hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={24} />
              </Link>
              <Link 
                href="https://instagram.com/afsalprimamaula" 
                target="_blank"
                className="text-cream/60 hover:text-gold hover:scale-110 transition-all duration-300"
              >
                <Instagram size={24} />
              </Link>
            </div>
          </div>

        </motion.div>

        {/* Kolom Kanan: Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Card className="p-8 border-white/10 bg-forest-card/50 backdrop-blur-xl shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-bold text-cream/70">Name</label>
                <input
                  required
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-forest-main/50 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-bold text-cream/70">Email</label>
                <input
                  required
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-forest-main/50 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-bold text-cream/70">Message</label>
                <textarea
                  required
                  rows={5}
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full bg-forest-main/50 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all resize-none"
                />
              </div>

              <Button 
                type="submit" 
                variant="primary" 
                className="w-full py-4 text-base font-bold shadow-lg shadow-gold/10"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"} 
                {!isSubmitting && <Send size={18} />}
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}