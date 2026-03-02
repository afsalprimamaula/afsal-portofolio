// # Tombol Custom (Gold/Outline)

import { ReactNode, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils"; // Pastikan lib/utils.ts sudah ada

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "outline" | "ghost";
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
  // Definisi varian warna sesuai tema Luxury
  const variants = {
    primary: "bg-gold-main text-forest-main hover:bg-gold-dim",
    outline: "border border-gold-main/30 text-gold-main hover:bg-gold-main/10",
    ghost: "text-cream/70 hover:text-gold-main hover:bg-white/5",
  };

  // Definisi ukuran tombol
  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={cn(
        "rounded-full font-bold transition-all active:scale-95 flex items-center justify-center gap-2",
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