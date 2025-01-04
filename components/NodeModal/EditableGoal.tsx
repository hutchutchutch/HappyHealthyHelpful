"use client";

import { NodeGoal } from "@/lib/types/node-details";
import { EditableField } from "./EditableField";

interface EditableGoalProps {
  goal: NodeGoal;
  isEditing: boolean;
  color: string;
  onChange: (updatedGoal: NodeGoal) => void;
}

export function EditableGoal({ goal, isEditing, color, onChange }: EditableGoalProps) {
  return (
    <li className="flex gap-3">
      <div 
        className="w-2 h-2 rounded-full mt-2"
        style={{ backgroundColor: color }}
      />
      <div className="flex-1">
        <EditableField
          value={goal.title}
          isEditing={isEditing}
          className="text-white font-medium"
          onChange={(newTitle) => onChange({ ...goal, title: newTitle })}
        />
        <EditableField
          value={goal.description}
          isEditing={isEditing}
          className="text-gray-400 text-sm mt-1"
          onChange={(newDescription) => onChange({ ...goal, description: newDescription })}
        />
      </div>
    </li>
  );
}