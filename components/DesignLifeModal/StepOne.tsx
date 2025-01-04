"use client";

import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { PillarInput } from "./PillarInput";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";

interface StepOneProps {
  selectedPillars: string[];
  onAddPillar: (pillar: string) => void;
  onRemovePillar: (pillar: string) => void;
}

export function StepOne({ selectedPillars, onAddPillar, onRemovePillar }: StepOneProps) {
  return (
    <div className="space-y-6">
      <div>
        <DialogTitle className="text-xl font-semibold">
          Step 1: Choose your pillars
        </DialogTitle>
        <DialogDescription className="text-white/70">
          These are the core categories that shape your approach to a fulfilling life.
        </DialogDescription>
      </div>

      {/* Selected Pillars */}
      {selectedPillars.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedPillars.map((pillar) => (
            <Badge
              key={pillar}
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-3 py-1"
            >
              {pillar}
              <button
                onClick={() => onRemovePillar(pillar)}
                className="ml-2 hover:text-white/70"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      {/* Pillar Input and Suggestions */}
      <PillarInput onAddPillar={onAddPillar} />
    </div>
  );
}