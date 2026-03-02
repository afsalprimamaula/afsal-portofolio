
// src/lib/data.ts
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "FinLux Dashboard",
    description: "Mobile application for high-net-worth individuals to track luxury assets and stock portfolios with elegance.",
    image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=1000&auto=format&fit=crop",
    category: "Web Apps",
    tags: ["SwiftUI", "Firebase", "Framer"],
    liveLink: "#",
    sourceLink: "#",
  },
  {
    id: "2",
    title: "Aurelia Boutique",
    description: "A minimalist e-commerce platform for a luxury jewelry brand with a focus on high-conversion UX.",
    image: "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?q=80&w=1000&auto=format&fit=crop",
    category: "UI/UX Design",
    tags: ["Next.js", "Tailwind", "Supabase"],
    liveLink: "#",
  },
];