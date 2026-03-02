import { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost" | "gold"; 
  size?: "sm" | "md" | "lg";
  className?: string;
}

export default function Button({
  children,
  variant = "primary",
  size = "md",
  className,
  ...props
}: ButtonProps) {
  
  const variants = {
    // Primary sekarang DEFAULT GOLD. 
    // Jika tombol Anda masih hijau, berarti file ini BELUM terupdate.
    primary: "bg-gold text-forest-main hover:bg-gold-dim hover:shadow-lg transition-transform hover:-translate-y-0.5",
    
    // Variant khusus Gold (sama dengan primary, untuk pemaksaan jika perlu)
    gold: "bg-gold text-forest-main hover:bg-gold-dim hover:shadow-lg transition-transform hover:-translate-y-0.5 shadow-[0_0_20px_rgba(212,175,55,0.3)]",
    
    outline: "border border-gold/30 text-gold hover:bg-gold/10",
    ghost: "text-cream/70 hover:text-gold hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(
        "rounded-full font-bold transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}