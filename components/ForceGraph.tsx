"use client";

import { useEffect, useRef, useState } from 'react';
import * as d3 from 'd3';
import { GraphData, Node, Link } from '@/lib/types/graph';
import { getNodeColor } from '@/lib/utils/node-colors';
import NodeModal from '@/components/NodeModal';
import { nodeDetails } from '@/lib/data/node-details';
import { useDimensions } from '@/hooks/useDimensions';

interface ForceGraphProps {
  data: GraphData;
  defaultWidth?: number;
  defaultHeight?: number;
}

export default function ForceGraph({ 
  data, 
  defaultWidth = 1200, 
  defaultHeight = 800
}: ForceGraphProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const [selectedNode, setSelectedNode] = useState<Node | null>(null);
  const { width = defaultWidth, height = defaultHeight } = useDimensions();

  const getChildNodes = (node: Node | null) => {
    if (!node) return [];
    return data.nodes.filter(n => n.parent === node.id);
  };

  useEffect(() => {
    if (!svgRef.current) return;

    d3.select(svgRef.current).selectAll("*").remove();

    // Shift the center point 200px to the right
    const centerX = 200;
    const svg = d3.select(svgRef.current)
      .attr("viewBox", [(-width / 2) + centerX, -height / 2, width, height]);

    const simulation = d3.forceSimulation<Node>(data.nodes)
      .force("link", d3.forceLink<Node, Link>(data.links)
        .id(d => d.id)
        .distance(d => {
          if (d.source.group === 'main' && d.target.group === 'secondary') return 150;
          if (d.source.group === 'secondary' && d.target.group === 'tertiary') return 80;
          return 100;
        }))
      .force("charge", d3.forceManyBody().strength(d => {
        if (d.group === 'main') return -1000;
        if (d.group === 'secondary') return -500;
        return -200;
      }))
      .force("x", d3.forceX(centerX).strength(0.1))
      .force("y", d3.forceY().strength(0.1))
      .force("collide", d3.forceCollide().radius(d => {
        if (d.group === 'main') return 50;
        if (d.group === 'secondary') return 35;
        return 25;
      }));

    const links = svg.append("g")
      .selectAll("line")
      .data(data.links)
      .join("line")
      .attr("stroke", "#333")
      .attr("stroke-opacity", 0.6)
      .attr("stroke-width", d => Math.sqrt(d.value));

    const nodes = svg.append("g")
      .selectAll("g")
      .data(data.nodes)
      .join("g")
      .style("cursor", "pointer")
      .on("click", (event, d) => {
        event.stopPropagation();
        setSelectedNode(d);
      });

    nodes.append("circle")
      .attr("r", d => {
        if (d.group === 'main') return 30;
        if (d.group === 'secondary') return 20;
        return 15;
      })
      .attr("fill", d => getNodeColor(d))
      .attr("stroke", "#222")
      .attr("stroke-width", 1.5);

    nodes.append("text")
      .text(d => d.id)
      .attr("x", 0)
      .attr("y", d => {
        if (d.group === 'main') return 45;
        if (d.group === 'secondary') return 35;
        return 25;
      })
      .attr("text-anchor", "middle")
      .attr("fill", "#fff")
      .style("font-size", d => {
        if (d.group === 'main') return "16px";
        if (d.group === 'secondary') return "14px";
        return "12px";
      })
      .style("font-weight", d => d.group === 'main' ? "600" : "400");

    nodes.call(d3.drag<SVGGElement, Node>()
      .on("start", dragstarted)
      .on("drag", dragged)
      .on("end", dragended));

    simulation.on("tick", () => {
      links
        .attr("x1", d => (d.source as Node).x!)
        .attr("y1", d => (d.source as Node).y!)
        .attr("x2", d => (d.target as Node).x!)
        .attr("y2", d => (d.target as Node).y!);

      nodes.attr("transform", d => `translate(${d.x},${d.y})`);
    });

    function dragstarted(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0.3).restart();
      event.subject.fx = event.subject.x;
      event.subject.fy = event.subject.y;
    }

    function dragged(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      event.subject.fx = event.x;
      event.subject.fy = event.y;
    }

    function dragended(event: d3.D3DragEvent<SVGGElement, Node, Node>) {
      if (!event.active) simulation.alphaTarget(0);
      event.subject.fx = null;
      event.subject.fy = null;
    }

    return () => {
      simulation.stop();
    };
  }, [data, width, height]);

  return (
    <>
      <svg
        ref={svgRef}
        width={width}
        height={height}
        className="w-full h-full"
        style={{ maxHeight: '100vh' }}
      />
      <NodeModal
        isOpen={!!selectedNode}
        onClose={() => setSelectedNode(null)}
        node={selectedNode}
        details={selectedNode ? nodeDetails[selectedNode.id] : null}
        childNodes={getChildNodes(selectedNode)}
      />
    </>
  );
}