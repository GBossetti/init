'use client';

import { motion } from 'framer-motion';

interface TechBackgroundProps {
  variant?: 'circuit' | 'grid' | 'dots';
}

// Use CSS variable values directly since Tailwind classes don't work in SVG patterns
const ACCENT_COLOR = '#3b82f6';
const ACCENT_COLOR_DIM = 'rgba(59, 130, 246, 0.5)';
const MUTED_COLOR = '#a1a1aa';

export function TechBackground({ variant = 'circuit' }: TechBackgroundProps) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Ken Burns animated container */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1 }}
        animate={{ scale: [1, 1.08, 1] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      >
        {variant === 'circuit' && <CircuitPattern />}
        {variant === 'grid' && <GridPattern />}
        {variant === 'dots' && <DotsPattern />}
      </motion.div>
      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background/60" />
    </div>
  );
}

function CircuitPattern() {
  return (
    <svg
      className="h-full w-full"
      style={{ opacity: 0.3 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="circuit"
          x="0"
          y="0"
          width="100"
          height="100"
          patternUnits="userSpaceOnUse"
        >
          {/* Horizontal lines */}
          <line x1="0" y1="25" x2="40" y2="25" stroke={ACCENT_COLOR} strokeWidth="1" />
          <line x1="60" y1="25" x2="100" y2="25" stroke={ACCENT_COLOR} strokeWidth="1" />
          <line x1="0" y1="75" x2="30" y2="75" stroke={ACCENT_COLOR} strokeWidth="1" />
          <line x1="70" y1="75" x2="100" y2="75" stroke={ACCENT_COLOR} strokeWidth="1" />
          {/* Vertical lines */}
          <line x1="50" y1="0" x2="50" y2="20" stroke={ACCENT_COLOR} strokeWidth="1" />
          <line x1="50" y1="30" x2="50" y2="70" stroke={ACCENT_COLOR} strokeWidth="1" />
          <line x1="50" y1="80" x2="50" y2="100" stroke={ACCENT_COLOR} strokeWidth="1" />
          {/* Nodes */}
          <circle cx="50" cy="25" r="3" fill={ACCENT_COLOR} />
          <circle cx="50" cy="75" r="3" fill={ACCENT_COLOR} />
          <circle cx="25" cy="50" r="2" fill={ACCENT_COLOR_DIM} />
          <circle cx="75" cy="50" r="2" fill={ACCENT_COLOR_DIM} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#circuit)" />
    </svg>
  );
}

function GridPattern() {
  return (
    <svg
      className="h-full w-full"
      style={{ opacity: 0.2 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="grid"
          x="0"
          y="0"
          width="50"
          height="50"
          patternUnits="userSpaceOnUse"
        >
          <line x1="0" y1="0" x2="50" y2="0" stroke={MUTED_COLOR} strokeWidth="0.5" />
          <line x1="0" y1="0" x2="0" y2="50" stroke={MUTED_COLOR} strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grid)" />
    </svg>
  );
}

function DotsPattern() {
  return (
    <svg
      className="h-full w-full"
      style={{ opacity: 0.3 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <pattern
          id="dots"
          x="0"
          y="0"
          width="30"
          height="30"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="15" cy="15" r="1.5" fill={ACCENT_COLOR} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#dots)" />
    </svg>
  );
}
