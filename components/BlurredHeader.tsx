"use client";

import { cn } from "@/lib/utils";

interface BlurredHeaderProps {
  className?: string;
}

export function BlurredHeader({ className }: BlurredHeaderProps) {
  return (
    <div className={cn("relative z-10 inline-block", className)}>
      <div className="relative">
        {/* Blurred backdrop with smooth gradient */}
        <div 
          className="absolute inset-0 -m-2 rounded-xl backdrop-blur-[10px]"
          style={{
            background: `linear-gradient(
              180deg,
              rgba(0, 0, 0, 0.6) 0%,
              rgba(0, 0, 0, 0.2) 50%,
              rgba(0, 0, 0, 0.6) 100%
            )`,
            transition: 'background 0.3s ease'
          }}
        />
        
        {/* Text content */}
        <h1 className="relative text-4xl md:text-6xl font-bold tracking-tight flex flex-col gap-4">
          <span className="text-white/90 px-3 py-1">Life can be</span>
          <span className="gradient-text px-3 py-1">simple</span>
        </h1>
      </div>
    </div>
  );
}