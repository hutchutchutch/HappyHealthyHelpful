"use client";

import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { StepOne } from "./StepOne";
import { StepTwo } from "./StepTwo";
import { StepThree } from "./StepThree";

interface DesignLifeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DesignLifeModal({ isOpen, onClose }: DesignLifeModalProps) {
  const [step, setStep] = useState(1);
  const [selectedPillars, setSelectedPillars] = useState<string[]>([]);
  const [categories, setCategories] = useState<Record<string, string[]>>({});
  const [activities, setActivities] = useState<Record<string, string[]>>({});

  const handleAddPillar = (pillar: string) => {
    if (!selectedPillars.includes(pillar)) {
      setSelectedPillars([...selectedPillars, pillar]);
    }
  };

  const handleRemovePillar = (pillar: string) => {
    setSelectedPillars(selectedPillars.filter(p => p !== pillar));
    const newCategories = { ...categories };
    delete newCategories[pillar];
    setCategories(newCategories);
  };

  const handleAddCategory = (pillar: string, category: string) => {
    setCategories(prev => ({
      ...prev,
      [pillar]: [...(prev[pillar] || []), category]
    }));
  };

  const handleRemoveCategory = (pillar: string, category: string) => {
    setCategories(prev => ({
      ...prev,
      [pillar]: prev[pillar].filter(c => c !== category)
    }));
    const newActivities = { ...activities };
    delete newActivities[category];
    setActivities(newActivities);
  };

  const handleAddActivity = (category: string, activity: string) => {
    setActivities(prev => ({
      ...prev,
      [category]: [...(prev[category] || []), activity]
    }));
  };

  const handleRemoveActivity = (category: string, activity: string) => {
    setActivities(prev => ({
      ...prev,
      [category]: prev[category].filter(a => a !== activity)
    }));
  };

  const handleNext = () => {
    setStep(prev => prev + 1);
  };

  const handleBack = () => {
    setStep(prev => prev - 1);
  };

  const hasSelectedItems = () => {
    if (step === 2) return Object.values(categories).some(cats => cats.length > 0);
    if (step === 3) return Object.values(activities).some(acts => acts.length > 0);
    return false;
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="flex flex-col bg-[#121212] border-white/20 text-white max-w-[80vw] w-[80vw] max-h-[85vh] p-0 gap-0 rounded-[32px] overflow-hidden">
        <div className="p-6 overflow-y-auto">
          {step === 1 && (
            <StepOne
            />
          )}
          {step === 2 && (
            <StepTwo
              pillars={selectedPillars}
              categories={categories}
              onAddCategory={handleAddCategory}
              onRemoveCategory={handleRemoveCategory}
            />
          )}
          {step === 3 && (
            <StepThree
              categories={categories}
              activities={activities}
              onAddActivity={handleAddActivity}
              onRemoveActivity={handleRemoveActivity}
            />
          )}
        </div>

        <div className="p-4 border-t border-white/10 mt-auto">
          <div className="flex justify-end gap-3">
            {step > 1 && (
              <Button
                variant="outline"
                onClick={handleBack}
                className="w-24 bg-white/5 hover:bg-white/10 border-white/20 text-white rounded-[16px]"
              >
                Back
              </Button>
            )}
            {(step === 1 || hasSelectedItems()) && (
              <Button
                onClick={step === 3 ? () => {} : handleNext}
                className="w-24 gradient-shadow text-base rounded-[16px] bg-[#121212] hover:bg-[#1a1a1a] transition-colors animate-fadeIn"
              >
                <span className="gradient-text">
                  {step === 3 ? "Generate" : "Next"}
                </span>
              </Button>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}