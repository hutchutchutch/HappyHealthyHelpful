"use client";

import { cn } from "@/lib/utils";

interface GradientContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function GradientContainer({ children, className, ...props }: GradientContainerProps) {
  return (
    <div className={cn("relative", className)} {...props}>
      <div 
        className="absolute inset-0 rounded-2xl"
        style={{
          background: `linear-gradient(90deg, #3B82F6 0%, #3B82F6 100%)`,
          filter: 'blur(8px)',
          opacity: 0.2,
          animation: 'pulse 2s ease-in-out infinite'
        }}
      />
      {children}
    </div>
  );
}