"use client";

export function TopGradient() {
  return (
    <div className="absolute top-0 left-0 right-0 h-48 bg-gradient-to-b from-background to-transparent z-[5] pointer-events-none" />
  );
}

export function BottomGradient() {
  return (
    <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-background to-transparent pointer-events-none" />
  );
}