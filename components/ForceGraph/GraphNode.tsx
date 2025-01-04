"use client";

import { Node } from "@/lib/types/graph";
import { getNodeColor } from "@/lib/utils/node-colors";
import { useState } from "react";

interface GraphNodeProps {
  node: Node;
  onClick: (node: Node) => void;
}

export function GraphNode({ node, onClick }: GraphNodeProps) {

  const baseRadius = node.group === 'main' ? 40 // Increased from 30
    : node.group === 'secondary' ? 20 
    : 15;
  
  return (
    <g
      onClick={(e) => {
        e.stopPropagation();
        onClick(node);
      }}
      style={{ 
        cursor: 'pointer',
        transition: 'all 0.2s ease-out'
      }}
    >
      <circle
        r={radius}
        fill={getNodeColor(node)}
        stroke="#222"
        strokeWidth={1.5}
      />
      <text
        x={0}
        y={baseRadius + 15}
        textAnchor="middle"
        fill="#fff"
        style={{
          fontSize: node.group === 'main' ? "16px" 
            : node.group === 'secondary' ? "14px" 
            : "12px",
          fontWeight: node.group === 'main' ? "600" : "400"
        }}
      >
        {node.id}
      </text>
    </g>
  );
}