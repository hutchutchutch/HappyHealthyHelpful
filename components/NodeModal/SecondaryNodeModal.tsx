"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Node } from "@/lib/types/graph";
import { getNodeColor } from "@/lib/utils/node-colors";
import { GradientContainer } from "@/components/ui/gradient-container";
import { cn } from "@/lib/utils";

interface SecondaryNodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
  childNodes: Node[];
  description: string;
}

export function SecondaryNodeModal({
  isOpen,
  onClose,
  node,
  childNodes,
  description
}: SecondaryNodeModalProps) {
  if (!node) return null;

  const nodeColor = getNodeColor(node);

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className={cn(
        "p-0 overflow-hidden",
        "w-[calc(100%-2rem)] max-w-[90vw] sm:max-w-[500px]",
        "max-h-[80vh] sm:max-h-[90vh]",
        "top-[50%] left-[50%] -translate-x-[50%] -translate-y-[50%]",
        "bg-[#121212] border-white/20 text-white rounded-2xl"
      )}>
        <GradientContainer className="rounded-2xl h-full">
          <div className="bg-[#121212] p-4 sm:p-6 overflow-y-auto max-h-[80vh] sm:max-h-[90vh]">
            <DialogHeader className="mb-6">
              <DialogTitle className="text-xl sm:text-2xl font-bold text-white">
                {node.id}
              </DialogTitle>
            </DialogHeader>

            {/* Description */}
            <p className="text-gray-300 text-sm sm:text-base mb-6">
              {description}
            </p>

            {/* Child Nodes */}
            {childNodes.length > 0 && (
              <div className="space-y-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">Activities</h3>
                <div className="flex flex-wrap gap-2">
                  {childNodes.map((child) => (
                    <Badge
                      key={child.id}
                      style={{ backgroundColor: getNodeColor(child) }}
                      className="text-white border-none px-3 py-1 rounded-xl text-sm"
                    >
                      {child.id}
                    </Badge>
                  ))}
                </div>
              </div>
            )}
          </div>
        </GradientContainer>
      </DialogContent>
    </Dialog>
  );
}