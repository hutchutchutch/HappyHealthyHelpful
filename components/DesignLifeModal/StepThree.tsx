"use client";

import { DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { ActivityInput } from "./ActivityInput";

interface StepThreeProps {
  categories: Record<string, string[]>;
  activities: Record<string, string[]>;
  onAddActivity: (category: string, activity: string) => void;
  onRemoveActivity: (category: string, activity: string) => void;
}

export function StepThree({ 
  categories,
  activities,
  onAddActivity,
  onRemoveActivity
}: StepThreeProps) {
  return (
    <div className="space-y-6">
      <div>
        <DialogTitle className="text-xl font-semibold">
          Step 3: Decide on Activities
        </DialogTitle>
        <DialogDescription className="text-white/70">
          Choose specific activities for each category that will help you achieve your goals.
        </DialogDescription>
      </div>

      <div className="space-y-8">
        {Object.entries(categories).map(([pillar, categoryList]) => (
          <div key={pillar} className="space-y-6">
            <h3 className="text-lg font-medium text-white">{pillar}</h3>
            {categoryList.map(category => (
              <div key={category} className="space-y-3">
                <h4 className="text-sm font-medium text-white/80">{category}</h4>
                <ActivityInput
                  category={category}
                  selectedActivities={activities[category] || []}
                  onAddActivity={(activity) => onAddActivity(category, activity)}
                  onRemoveActivity={(activity) => onRemoveActivity(category, activity)}
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}