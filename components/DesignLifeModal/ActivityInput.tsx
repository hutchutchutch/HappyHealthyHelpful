"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

interface ActivityInputProps {
  category: string;
  selectedActivities: string[];
  onAddActivity: (activity: string) => void;
  onRemoveActivity: (activity: string) => void;
}

const SUGGESTED_ACTIVITIES: Record<string, string[]> = {
  Exercise: ["Running", "Yoga", "Weight Training", "Swimming"],
  Nutrition: ["Meal Planning", "Cooking", "Tracking Macros", "Hydration"],
  Sleep: ["Sleep Schedule", "Evening Routine", "Morning Routine", "Naps"],
  Skills: ["Online Courses", "Practice", "Projects", "Mentoring"],
  Networking: ["Events", "Coffee Chats", "Social Media", "Conferences"],
  Reading: ["Books", "Articles", "Journals", "Research"],
  Meditation: ["Daily Practice", "Guided Sessions", "Mindfulness", "Breathing"],
};

export function ActivityInput({
  category,
  selectedActivities,
  onAddActivity,
  onRemoveActivity,
}: ActivityInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddActivity(inputValue.trim());
    setInputValue("");
  };

  const suggestions = SUGGESTED_ACTIVITIES[category] || [];

  return (
    <div className="space-y-4">
      {selectedActivities.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedActivities.map((activity) => (
            <Badge
              key={activity}
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-3 py-1 rounded-xl"
            >
              {activity}
              <button
                onClick={() => onRemoveActivity(activity)}
                className="ml-2 hover:text-white/70"
              >
                <X className="h-3 w-3" />
              </button>
            </Badge>
          ))}
        </div>
      )}

      <form onSubmit={handleSubmit} className="relative">
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter an activity..."
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
        {suggestions.map((activity) => (
          <Badge
            key={activity}
            variant="outline"
            className="bg-white/5 hover:bg-white/10 cursor-pointer border-white/20 text-white rounded-xl"
            onClick={() => onAddActivity(activity)}
          >
            {activity}
          </Badge>
        ))}
      </div>
    </div>
  );
}