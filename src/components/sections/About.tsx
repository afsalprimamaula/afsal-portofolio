// # Bento Grid layout

// src/components/sections/About.tsx
"use client";
import { motion } from "framer-motion";
import Card from "@/components/ui/Card";
import { Code2, Briefcase, GraduationCap, Trophy } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-5xl font-bold text-cream">
          About <span className="text-gold-main">Me.</span>
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Card 1: V-Shape Developer (Spans 2 columns on desktop) */}
        <Card className="md:col-span-2 flex flex-col justify-center space-y-4">
          <div className="flex items-center gap-3 text-gold-main mb-2">
            <Code2 size={24} />
            <span className="font-bold tracking-widest uppercase text-xs">Profile</span>
          </div>
          <h3 className="text-2xl font-bold text-cream">V-Shape Developer</h3>
          <p className="text-cream/60 leading-relaxed">
            Saya adalah seorang pengembang yang menggabungkan keahlian mendalam dalam Frontend Engineering dengan visi desain UI/UX yang kuat. Fokus saya adalah menciptakan produk digital yang fungsional secara teknis sekaligus memberikan pengalaman visual eksklusif.
          </p>
        </Card>

        {/* Card 2: Tech Skills */}
        <Card className="space-y-4">
          <div className="text-gold-main mb-2">
            <span className="font-bold tracking-widest uppercase text-xs">Tech Stack</span>
          </div>
          <div className="flex flex-wrap gap-2">
            {['React.js', 'Next.js', 'Tailwind', 'TypeScript', 'Framer', 'Figma'].map((skill) => (
              <span key={skill} className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-xs text-cream/80">
                {skill}
              </span>
            ))}
          </div>
        </Card>

        {/* Card 3: Experience */}
        <Card className="space-y-4">
          <div className="flex items-center gap-3 text-gold-main mb-2">
            <Briefcase size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">Experience</span>
          </div>
          <div>
            <h4 className="font-bold text-cream">Fullstack Intern</h4>
            <p className="text-gold-main/80 text-sm">@TechCorp Labs</p>
            <p className="text-cream/40 text-xs mt-1">2023 - Present</p>
          </div>
        </Card>

        {/* Card 4: Education */}
        <Card className="space-y-4">
          <div className="flex items-center gap-3 text-gold-main mb-2">
            <GraduationCap size={20} />
            <span className="font-bold tracking-widest uppercase text-xs">Education</span>
          </div>
          <div>
            <h4 className="font-bold text-cream">S1 Informatika</h4>
            <p className="text-cream/60 text-sm italic">Expected 2026</p>
          </div>
        </Card>

        {/* Card 5: Achievement (Wide on desktop) */}
        <Card className="md:col-span-1 flex items-center gap-6 bg-gold-main/[0.03] border-gold-main/20">
          <div className="p-4 bg-gold-main/10 rounded-2xl text-gold-main">
            <Trophy size={32} />
          </div>
          <div>
            <h4 className="font-bold text-cream italic">Top 3 National Hackathon</h4>
            <p className="text-cream/40 text-sm">Tech Vision 2023 Challenge</p>
          </div>
        </Card>
      </div>
    </section>
  );
}