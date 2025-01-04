"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus } from "lucide-react";

interface PillarInputProps {
  onAddPillar: (pillar: string) => void;
}

const SUGGESTED_PILLARS = ["Health", "Career", "Relationships", "Personal Growth", "Finance", "Spirituality"];

export function PillarInput({ onAddPillar }: PillarInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddPillar(inputValue.trim());
    setInputValue("");
  };

  return (
    <div className="space-y-4">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter a pillar name..."
          className="bg-background/50 border-white/20 text-white pr-10 rounded-xl"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 text-white/70 hover:text-white"
        >
          <Plus className="h-5 w-5" />
        </button>
      </form>

      <div className="flex flex-wrap gap-2">
        {SUGGESTED_PILLARS.map((pillar) => (
          <Badge
            key={pillar}
            variant="outline"
            className="bg-white/5 hover:bg-white/10 cursor-pointer border-white/20 text-white rounded-xl"
            onClick={() => onAddPillar(pillar)}
          >
            {pillar}
          </Badge>
        ))}
      </div>
    </div>
  );
}