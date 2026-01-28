'use client';

import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import type { SlideId, SlideBackground } from '@/types/slides';

interface SlideProps {
  id: SlideId;
  children: ReactNode;
  background?: SlideBackground;
  className?: string;
}

const backgroundClasses: Record<SlideBackground, string> = {
  default: 'bg-background',
  secondary: 'bg-background-secondary',
  pattern: 'bg-background relative overflow-hidden',
};

export function Slide({
  id,
  children,
  background = 'default',
  className = '',
}: SlideProps) {
  return (
    <section
      id={id}
      className={`slide relative flex min-h-dvh items-center justify-center ${backgroundClasses[background]} ${className}`}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="relative z-10 w-full"
      >
        {children}
      </motion.div>
    </section>
  );
}
