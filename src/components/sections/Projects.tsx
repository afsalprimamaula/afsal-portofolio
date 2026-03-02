// # Gallery

// src/components/sections/Projects.tsx
"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Filter, ExternalLink, Github } from "lucide-react";
import { projects } from "@/lib/data";
import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

const categories = ["All Works", "UI/UX Design", "Web Apps", "Mobile"];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("All Works");

  const filteredProjects = activeCategory === "All Works" 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Galeri */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-5xl font-bold text-cream">
            Work <span className="text-gold-main">Gallery.</span>
          </h2>
          <p className="text-cream/40 text-sm">Curated collection of digital excellence.</p>
        </div>
        <div className="px-4 py-2 bg-gold-main/10 border border-gold-main/20 rounded-full text-gold-main text-xs font-bold">
          {projects.length} Total Projects
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all border ${
              activeCategory === cat 
              ? "bg-gold-main text-forest-main border-gold-main" 
              : "border-white/10 text-cream/50 hover:border-gold-main/30 hover:text-gold-main"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Project Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <AnimatePresence mode="wait">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4 }}
            >
              <Card className="group overflow-hidden p-0 border-white/5">
                {/* Image Container */}
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
                  />
                  <div className="absolute top-4 right-4 px-3 py-1 bg-forest-main/80 backdrop-blur-md rounded-full text-[10px] font-bold text-gold-main border border-white/10 uppercase tracking-widest">
                    {project.category}
                  </div>
                </div>

                {/* Content */}
                <div className="p-8 space-y-4">
                  <h3 className="text-2xl font-bold text-cream group-hover:text-gold-main transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-cream/50 text-sm leading-relaxed line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-[10px] font-bold uppercase tracking-widest text-cream/30 border border-white/5 px-2 py-1 rounded">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4 pt-4">
                    <Button variant="primary" size="sm" className="flex-1 gap-2">
                      <ExternalLink size={14} /> Live Demo
                    </Button>
                    {project.sourceLink && (
                      <Button variant="outline" size="sm" className="flex-1 gap-2">
                        <Github size={14} /> Source
                      </Button>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </section>
  );
}