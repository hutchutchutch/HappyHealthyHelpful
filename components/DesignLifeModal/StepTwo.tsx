"use client";

import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { CategoryInput } from "./CategoryInput";

interface StepTwoProps {
  pillars: string[];
  categories: Record<string, string[]>;
  onAddCategory: (pillar: string, category: string) => void;
  onRemoveCategory: (pillar: string, category: string) => void;
}

export function StepTwo({ pillars, categories, onAddCategory, onRemoveCategory }: StepTwoProps) {
  return (
    <div className="space-y-6">
      <div>
        <DialogTitle className="text-xl font-semibold">
          Step 2: Identify categories
        </DialogTitle>
        <DialogDescription className="text-white/70">
          For each pillar, add specific categories that you want to focus on.
        </DialogDescription>
      </div>

      <div className="space-y-8">
        {pillars.map((pillar) => (
          <div key={pillar} className="space-y-3">
            <h3 className="text-lg font-medium text-white">{pillar}</h3>
            <CategoryInput
              pillar={pillar}
              selectedCategories={categories[pillar] || []}
              onAddCategory={(category) => onAddCategory(pillar, category)}
              onRemoveCategory={(category) => onRemoveCategory(pillar, category)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}