"use client";

import { motion, Variants } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { GraduationCap, Briefcase, Calendar, Code2, Cpu, Wrench } from "lucide-react";

// --- ANIMATION VARIANTS ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: "easeOut" } 
  },
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

// --- DATA DEFINITION ---
const educationData = [
  {
    institution: "Universitas (Isi Nama Kampus)",
    degree: "S1 Teknik Informatika",
    year: "2023 - Sekarang",
    description: "Fokus pada Software Engineering, Algoritma, dan Artificial Intelligence.",
  },
  {
    institution: "SMA (Isi Nama Sekolah)",
    degree: "Jurusan IPA / RPL",
    year: "2020 - 2023",
    description: "Dasar-dasar logika pemrograman dan sains.",
  },
];

const experienceData = [
  {
    role: "Freelance Web Developer",
    company: "Remote / Self-Employed",
    year: "2024 - Sekarang",
    description: "Membangun website responsif dan aplikasi web modern untuk klien lokal dan internasional.",
  },
  {
    role: "Crypto Trader & Analyst",
    company: "Personal Portfolio",
    year: "2023 - Sekarang",
    description: "Mengelola portofolio aset digital dengan analisis teknikal dan fundamental (On-chain analysis).",
  },
];

const skillsData = {
  // BAGIAN 1: Web Development (TETAP)
  webDev: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Node.js", "Framer Motion"],
  
  // BAGIAN 2: Hard Skills (MENGGANTIKAN AI)
  hardSkills: [
    "Prompt Engineering",
    "Network Infrastructure",
    "Basic Penetration Testing",
    "Graphic Design",
    "Project Management",
    "Research",
    "Team Management",
    "Problem Solving"
  ],

  // BAGIAN 3: Tools (TETAP)
  tools: ["Git & GitHub", "VS Code", "Figma", "Postman", "Vercel", "Linux"],
};

export default function About() {
  return (
    <section id="about" className="relative py-24 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden">
      
      <SectionHeading title="About Me" subtitle="My Journey & Expertise" />

      <div className="space-y-20 mt-16">
        
        {/* === BAGIAN 1: PROFILE SUMMARY === */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
          className="w-full max-w-4xl mx-auto text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-cream mb-6">
            Membangun <span className="text-gold">Masa Depan Digital</span>
          </h3>
          <p className="text-cream/80 text-lg md:text-xl leading-relaxed font-light">
            "Mahasiswa Teknik Informatika yang aktif dalam ekosistem Full Stack Web Development dan Artificial Intelligence. 
            Saya memadukan kemampuan coding web modern dengan kekuatan AI untuk membangun aplikasi masa depan yang cerdas dan berdampak. 
            Berkomitmen untuk terus belajar, berbagi ilmu, dan menciptakan inovasi yang relevan dengan kebutuhan industri digital saat ini."
          </p>
        </motion.div>


        {/* === BAGIAN 2: EDUCATION & EXPERIENCE === */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          
          {/* Kolom Kiri: Education */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-forest-card border border-white/5 text-gold">
                <GraduationCap size={24} />
              </div>
              <h3 className="text-2xl font-bold text-cream">Education</h3>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-8 ml-3">
              {educationData.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative group">
                  <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-forest-main border-2 border-white/20 group-hover:border-gold group-hover:bg-gold transition-all duration-300" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">{item.institution}</h4>
                    <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 flex items-center gap-1">
                      <Calendar size={12} /> {item.year}
                    </span>
                  </div>
                  <p className="text-cream/90 font-medium mb-1">{item.degree}</p>
                  <p className="text-sm text-cream/50 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Kolom Kanan: Experience */}
          <motion.div
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={staggerContainer}
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="p-3 rounded-full bg-forest-card border border-white/5 text-gold">
                <Briefcase size={24} />
              </div>
              <h3 className="text-2xl font-bold text-cream">Experience</h3>
            </div>

            <div className="space-y-8 border-l border-white/10 pl-8 ml-3">
              {experienceData.map((item, index) => (
                <motion.div key={index} variants={fadeInUp} className="relative group">
                  <span className="absolute -left-[39px] top-1.5 h-4 w-4 rounded-full bg-forest-main border-2 border-white/20 group-hover:border-gold group-hover:bg-gold transition-all duration-300" />
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h4 className="text-lg font-bold text-cream group-hover:text-gold transition-colors">{item.role}</h4>
                    <span className="text-xs font-bold text-gold bg-gold/10 px-3 py-1 rounded-full w-fit mt-2 sm:mt-0 flex items-center gap-1">
                      <Calendar size={12} /> {item.year}
                    </span>
                  </div>
                  <p className="text-cream/90 font-medium mb-1">{item.company}</p>
                  <p className="text-sm text-cream/50 leading-relaxed">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>


        {/* === BAGIAN 3: TECH ECOSYSTEM (KEMBALI KE 3 KOLOM) === */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="pt-10 border-t border-white/5"
        >
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-cream mb-2">Tech Ecosystem</h3>
            <p className="text-cream/50 text-sm">Teknologi dan keahlian yang saya kuasai</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Category 1: Web Development (TETAP) */}
            <SkillCategory 
              title="Web Development" 
              icon={<Code2 size={20} />} 
              skills={skillsData.webDev} 
            />

            {/* Category 2: Hard Skills (BARU - MENGGANTIKAN AI) */}
            <SkillCategory 
              title="Hard Skills" 
              icon={<Cpu size={20} />} 
              skills={skillsData.hardSkills} 
            />

            {/* Category 3: Tools & Others (TETAP) */}
            <SkillCategory 
              title="Tools & Others" 
              icon={<Wrench size={20} />} 
              skills={skillsData.tools} 
            />

          </div>
        </motion.div>

      </div>
    </section>
  );
}

// Sub-komponen tetap sama
function SkillCategory({ title, icon, skills }: { title: string, icon: any, skills: string[] }) {
  return (
    <div className="bg-forest-card/30 rounded-2xl p-6 border border-white/5 hover:border-gold/20 transition-all duration-300 group">
      <div className="flex items-center gap-3 mb-6 text-cream/80 group-hover:text-gold transition-colors">
        {icon}
        <h4 className="font-bold text-lg">{title}</h4>
      </div>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span 
            key={idx}
            className="px-3 py-1.5 text-xs sm:text-sm rounded-full border border-white/10 text-cream/70 bg-white/5
                     hover:border-gold hover:text-gold hover:bg-gold/5 hover:scale-105 
                     transition-all duration-300 cursor-default select-none"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}