"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Import AnimatePresence
import { Send, Mail, MapPin, MessageCircle, Github, Linkedin, Instagram, CheckCircle2, XCircle, Loader2 } from "lucide-react"; // Tambah Icon Baru
import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Link from "next/link";
import emailjs from '@emailjs/browser';

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  
  const [formData, setFormData] = useState({ 
    user_name: "", 
    user_email: "", 
    message: "" 
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  // State baru untuk status notifikasi: 'idle' | 'success' | 'error'
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle"); // Reset status saat mulai kirim

    if (formRef.current) {
      emailjs
        .sendForm(
          'service_a778say',    // Ganti dengan Service ID Anda
          'template_k8bzq29',   // Ganti dengan Template ID Anda
          formRef.current,
          'cwj1Ys9BS5et0hg-6'     // Ganti dengan Public Key Anda
        )
        .then(
          (result) => {
            setFormData({ user_name: "", user_email: "", message: "" });
            setStatus("success"); // Set status sukses
            setIsSubmitting(false);
            
            // Hilangkan notifikasi otomatis setelah 5 detik
            setTimeout(() => setStatus("idle"), 5000);
          },
          (error) => {
            console.error(error);
            setStatus("error"); // Set status error
            setIsSubmitting(false);
            
            // Hilangkan notifikasi otomatis setelah 5 detik
            setTimeout(() => setStatus("idle"), 5000);
          }
        );
    }
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

            {/* WHATSAPP */}
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

          {/* SOCIAL MEDIA ICONS */}
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

        {/* Kolom Kanan: Form dengan Notifikasi Keren */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="relative" // Relative agar notifikasi bisa absolute di dalamnya jika mau, tapi kita taruh di bawah form saja
        >
          <Card className="p-8 border-white/10 bg-forest-card/50 backdrop-blur-xl shadow-2xl relative overflow-hidden">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="space-y-2">
                <label htmlFor="user_name" className="text-sm font-bold text-cream/70">Name</label>
                <input
                  required
                  type="text"
                  name="user_name"
                  id="user_name"
                  value={formData.user_name} 
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-forest-main/50 border border-white/10 rounded-xl px-4 py-3 text-cream placeholder:text-cream/20 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/50 transition-all"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="user_email" className="text-sm font-bold text-cream/70">Email</label>
                <input
                  required
                  type="email"
                  name="user_email"
                  id="user_email"
                  value={formData.user_email}
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
                  id="message"
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
                {isSubmitting ? (
                  <span className="flex items-center gap-2">
                    <Loader2 className="animate-spin" size={18} /> Sending...
                  </span>
                ) : (
                  <>Send Message <Send size={18} /></>
                )} 
              </Button>
            </form>

            {/* AREA NOTIFIKASI (TOAST) */}
            <AnimatePresence>
              {status === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-forest-main/95 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-gold/20 rounded-full flex items-center justify-center mx-auto mb-4 text-gold border border-gold/30">
                      <CheckCircle2 size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-cream mb-2">Message Sent!</h3>
                    <p className="text-cream/60 text-sm">Terima kasih telah menghubungi. Saya akan membalas secepatnya.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-xs font-bold text-gold hover:underline uppercase tracking-wider"
                    >
                      Close
                    </button>
                  </div>
                </motion.div>
              )}

              {status === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute inset-0 z-20 flex items-center justify-center bg-red-900/95 backdrop-blur-sm rounded-2xl"
                >
                  <div className="text-center p-6">
                    <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4 text-red-400 border border-red-500/30">
                      <XCircle size={32} />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">Failed to Send</h3>
                    <p className="text-white/60 text-sm">Terjadi kesalahan. Silakan coba lagi atau hubungi via WhatsApp.</p>
                    <button 
                      onClick={() => setStatus("idle")}
                      className="mt-6 text-xs font-bold text-white/80 hover:text-white hover:underline uppercase tracking-wider"
                    >
                      Try Again
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

          </Card>
        </motion.div>
      </div>
    </section>
  );
}