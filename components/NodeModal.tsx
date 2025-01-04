"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { NodeDetails } from "@/lib/types/node-details";
import { Node } from "@/lib/types/graph";
import { getNodeColor } from "@/lib/utils/node-colors";

interface NodeModalProps {
  isOpen: boolean;
  onClose: () => void;
  node: Node | null;
  details: NodeDetails | null;
  childNodes: Node[];
}

export default function NodeModal({ isOpen, onClose, node, details, childNodes }: NodeModalProps) {
  if (!node || !details) return null;

  const nodeColor = getNodeColor(node);
  const isPrimaryNode = node.group === 'main';

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-background border-gray-800">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {node.id}
          </DialogTitle>
        </DialogHeader>
        
        {/* Child Nodes Section */}
        <div className="my-4">
          <h3 className="text-lg font-semibold text-white mb-4">Categories</h3>
          <div className="flex flex-wrap gap-2">
            {childNodes.map((child) => (
              <Badge
                key={child.id}
                style={{ backgroundColor: getNodeColor(child) }}
                className="text-white border-none"
              >
                {child.id}
              </Badge>
            ))}
            {isPrimaryNode && (
              <Badge
                variant="outline"
                className="bg-transparent text-white border-white/20 hover:bg-white/10 cursor-pointer shadow-lg flex items-center gap-1"
              >
                <Plus className="h-3 w-3" />
                Add category
              </Badge>
            )}
          </div>
        </div>

        {/* Description */}
        <p className="text-gray-300 my-4">
          {details.description}
        </p>

        {/* Goals */}
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Goals</h3>
          <ul className="space-y-3">
            {details.goals.map((goal, index) => (
              <li key={index} className="flex gap-3">
                <div 
                  className="w-2 h-2 rounded-full mt-2"
                  style={{ backgroundColor: nodeColor }}
                />
                <div>
                  <h4 className="text-white font-medium">{goal.title}</h4>
                  <p className="text-gray-400 text-sm">{goal.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </DialogContent>
    </Dialog>
  );
}