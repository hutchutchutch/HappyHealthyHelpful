"use client";

import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus, Settings } from "lucide-react";
import { NodeDetails } from "@/lib/types/node-details";
import { Node } from "@/lib/types/graph";
import { getNodeColor } from "@/lib/utils/node-colors";
import { EditableField } from "./EditableField";
import { EditableGoal } from "./EditableGoal";
import { GradientContainer } from "@/components/ui/gradient-container";
import { cn } from "@/lib/utils";

interface NodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
  details: NodeDetails | null;
  childNodes: Node[];
}

export default function NodeModal({ isOpen, onClose, node, details, childNodes }: NodeModalProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [localDetails, setLocalDetails] = useState<NodeDetails | null>(details);

  if (!node || !localDetails) return null;

  const nodeColor = getNodeColor(node);
  const isPrimaryNode = node.group === 'main';

  const handleGoalUpdate = (index: number, updatedGoal: NodeGoal) => {
    if (!localDetails) return;
    const newGoals = [...localDetails.goals];
    newGoals[index] = updatedGoal;
    setLocalDetails({ ...localDetails, goals: newGoals });
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "p-0 overflow-hidden",
        "w-[calc(100%-2rem)] max-w-[90vw] sm:max-w-[600px]",
        "max-h-[80vh] sm:max-h-[90vh]",
        "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]"
      )}>
        <GradientContainer className="rounded-2xl h-full">
          <div className="bg-[#121212] p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[90vh]">
            <DialogHeader className="flex flex-row items-center justify-between mb-4 sm:mb-6">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                <EditableField
                  value={node.id}
                  isEditing={isEditing}
                  className="text-xl sm:text-2xl font-bold"
                  onChange={(value) => setLocalDetails({ ...localDetails, id: value })}
                />
              </DialogTitle>
              <Button
                variant="ghost"
                size="icon"
                className="text-white/70 hover:text-white"
                onClick={() => setIsEditing(!isEditing)}
              >
                <Settings className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </DialogHeader>
            
            {/* Child Nodes Section */}
            <div className="mb-4 sm:mb-6">
              <h3 className="text-base sm:text-lg font-semibold text-white mb-3 sm:mb-4">Categories</h3>
              <div className="flex flex-wrap gap-1.5 sm:gap-2">
                {childNodes.map((child) => (
                  <Badge
                    key={child.id}
                    style={{ backgroundColor: getNodeColor(child) }}
                    className="text-white border-none rounded-lg text-sm"
                  >
                    {child.id}
                  </Badge>
                ))}
                {isPrimaryNode && (
                  <Badge
                    variant="outline"
                    className="bg-transparent text-white border-white/20 hover:bg-white/10 cursor-pointer shadow-lg flex items-center gap-1 rounded-lg text-sm"
                  >
                    <Plus className="h-3 w-3" />
                    Add
                  </Badge>
                )}
              </div>
            </div>

            {/* Description */}
            <EditableField
              value={localDetails.description}
              isEditing={isEditing}
              isMultiline
              className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6"
              onChange={(value) => setLocalDetails({ ...localDetails, description: value })}
            />

            {/* Goals */}
            <div className="space-y-3 sm:space-y-4">
              <h3 className="text-base sm:text-lg font-semibold text-white">Goals</h3>
              <ul className="space-y-2 sm:space-y-3">
                {localDetails.goals.map((goal, index) => (
                  <EditableGoal
                    key={index}
                    goal={goal}
                    isEditing={isEditing}
                    color={nodeColor}
                    onChange={(updatedGoal) => handleGoalUpdate(index, updatedGoal)}
                  />
                ))}
              </ul>
            </div>
          </div>
        </GradientContainer>
      </DialogContent>
    </Dialog>
  );
}