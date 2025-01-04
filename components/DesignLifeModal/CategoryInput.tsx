"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";

interface CategoryInputProps {
  pillar: string;
  selectedCategories: string[];
  onAddCategory: (category: string) => void;
  onRemoveCategory: (category: string) => void;
}

const SUGGESTED_CATEGORIES: Record<string, string[]> = {
  Health: ["Exercise", "Nutrition", "Sleep", "Mental Health"],
  Career: ["Skills", "Networking", "Projects", "Learning"],
  Relationships: ["Family", "Friends", "Partner", "Community"],
  "Personal Growth": ["Reading", "Meditation", "Hobbies", "Learning"],
  Finance: ["Savings", "Investment", "Budgeting", "Income"],
  Spirituality: ["Meditation", "Practice", "Community", "Study"]
};

export function CategoryInput({
  pillar,
  selectedCategories,
  onAddCategory,
  onRemoveCategory,
}: CategoryInputProps) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;
    onAddCategory(inputValue.trim());
    setInputValue("");
  };

  const suggestions = SUGGESTED_CATEGORIES[pillar] || [];

  return (
    <div className="space-y-4">
      {selectedCategories.length > 0 && (
        <div className="flex flex-wrap gap-2">
          {selectedCategories.map((category) => (
            <Badge
              key={category}
              className="bg-[#3B82F6] hover:bg-[#3B82F6]/90 text-white px-3 py-1 rounded-xl"
            >
              {category}
              <button
                onClick={() => onRemoveCategory(category)}
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
          placeholder="Enter a category..."
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
        {suggestions.map((category) => (
          <Badge
            key={category}
            variant="outline"
            className="bg-white/5 hover:bg-white/10 cursor-pointer border-white/20 text-white rounded-xl"
            onClick={() => onAddCategory(category)}
          >
            {category}
          </Badge>
        ))}
      </div>
    </div>
  );
}