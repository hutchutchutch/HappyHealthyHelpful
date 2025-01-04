"use client";

import { ButtonHTMLAttributes } from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface GradientButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "default" | "sm" | "lg" | "icon";
  className?: string;
}

export function GradientButton({ 
  size = "default",
  className,
  ...props 
}: GradientButtonProps) {
  return (
    <Button
      size={size}
      className={cn(
        "bg-gradient-to-r from-[#FFD700] via-[#FFC107] to-[#FFD700]",
        "bg-[length:200%_auto] animate-[gradient_3s_linear_infinite]",
        "hover:brightness-110 transition-[filter]",
        className
      )}
      {...props}
    />
  );
}