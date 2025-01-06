"use client";

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { X } from "lucide-react";
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

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-background border-gray-800">
        <DialogClose className="absolute right-4 top-4 text-white opacity-70 hover:opacity-100">
          <X className="h-4 w-4" />
        </DialogClose>
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-white">
            {node.id}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6 mt-4">
          {childNodes.map((category) => (
            <div key={category.id} className="space-y-3">
              <div className="flex items-center gap-2">
                <div 
                  className="w-2 h-2 rounded-full"
                  style={{ backgroundColor: getNodeColor(category) }}
                />
                <h3 className="text-lg font-semibold text-white">
                  {category.id}
                </h3>
              </div>
              
              <div className="pl-4 space-y-2">
                {details.activities?.[category.id]?.map((activity, idx) => (
                  <div 
                    key={idx} 
                    className="bg-white/5 p-3 rounded-lg text-white/80"
                  >
                    {activity}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  );
}