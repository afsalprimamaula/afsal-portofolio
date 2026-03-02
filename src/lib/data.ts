import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "1",
    title: "PUSTANI (Pustaka Informasi Petani)",
    description: "Platform edukasi pertanian terpadu yang menyediakan akses ke artikel berlisensi dari ahli tani serta fitur konsultasi langsung. Solusi digital ini dirancang untuk memberdayakan petani dengan informasi valid guna meningkatkan hasil panen dan efisiensi pertanian.",
    // Saya ganti gambar placeholder ke tema Pertanian agar visualnya nyambung
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1000&auto=format&fit=crop", 
    category: "Web Apps",
    tags: ["Agriculture", "Education Platform", "Community", "Web App"],
    liveLink: "#", // Isi jika sudah ada link demo
    sourceLink: "https://github.com/bilker29/Pustaka-Informasi-Petani-PUSTANI-",
  },
  {
    id: "2",
    title: "Gedoy Camping",
    description: "Transformasi digital untuk bisnis penyewaan villa dan camping ground konvensional. Membangun ekosistem pemesanan yang efisien dan user-centric, memudahkan manajemen reservasi sekaligus meningkatkan pengalaman pengguna dalam merencanakan aktivitas Leisure & Business.",
    // Saya ganti gambar placeholder ke tema Camping/Nature
    image: "https://images.unsplash.com/photo-1523987355523-c7b5b0dd90a7?q=80&w=1000&auto=format&fit=crop",
    category: "Web Apps",
    tags: ["Leisure & Business", "Booking System", "Digital Transformation", "Eco-Tourism"],
    liveLink: "#",
    sourceLink: "#", // Isi jika repositori tersedia publik
  },
];