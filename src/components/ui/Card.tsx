// # Dasar kartu kaca/gelap

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div className={cn(
      "glass-card p-6 rounded-3xl hover:shadow-[0_0_30px_rgba(212,175,55,0.1)] transition-all duration-500",
      className
    )}>
      {children}
    </div>
  );
}