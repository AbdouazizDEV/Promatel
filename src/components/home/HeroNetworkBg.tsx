"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 12, y: 18 },
  { x: 28, y: 42 },
  { x: 45, y: 22 },
  { x: 62, y: 55 },
  { x: 78, y: 30 },
  { x: 88, y: 68 },
  { x: 35, y: 72 },
  { x: 55, y: 85 },
  { x: 72, y: 12 },
];

const edges: [number, number][] = [
  [0, 2],
  [2, 4],
  [4, 8],
  [1, 3],
  [3, 5],
  [1, 6],
  [6, 7],
  [3, 7],
  [0, 1],
  [2, 3],
  [4, 5],
];

export function HeroNetworkBg() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="hero-grid-drift absolute inset-0 opacity-[0.14]" />
      <svg
        className="absolute inset-0 h-full w-full text-promatel-accent/40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => (
          <motion.line
            key={`${a}-${b}`}
            x1={nodes[a].x}
            y1={nodes[a].y}
            x2={nodes[b].x}
            y2={nodes[b].y}
            stroke="currentColor"
            strokeWidth="0.15"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 0.6 }}
            transition={{ duration: 1.2, delay: i * 0.06, ease: "easeOut" }}
          />
        ))}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r="0.55"
            fill="currentColor"
            initial={{ scale: 0 }}
            animate={{ scale: [1, 1.35, 1] }}
            transition={{
              scale: { duration: 2.5, repeat: Infinity, delay: i * 0.2 },
              default: { duration: 0.4, delay: 0.3 + i * 0.05 },
            }}
          />
        ))}
      </svg>
      <motion.div
        className="absolute -right-20 top-1/4 h-[420px] w-[420px] rounded-full bg-promatel-accent/20 blur-[100px]"
        animate={{ scale: [1, 1.12, 1], opacity: [0.35, 0.55, 0.35] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-32 bottom-0 h-[380px] w-[380px] rounded-full bg-promatel-blue/30 blur-[90px]"
        animate={{ scale: [1.1, 1, 1.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
