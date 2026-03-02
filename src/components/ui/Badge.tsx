// # Badge "Available for work"

import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface BadgeProps {
  children: ReactNode;
  className?: string;
}

export default function Badge({ children, className }: BadgeProps) {
  return (
    <div className={cn(
      "inline-flex items-center gap-2 px-4 py-1.5 bg-forest-main/90 border border-white/5 rounded-full shadow-lg backdrop-blur-md",
      className
    )}>
      <span className="relative flex h-2.5 w-2.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
      </span>
      <span className="text-xs font-medium text-cream/80 tracking-wide">{children}</span>
    </div>
  );
}