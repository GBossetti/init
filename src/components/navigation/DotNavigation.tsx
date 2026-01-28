'use client';

import { motion } from 'framer-motion';
import { useSlideContext } from '@/context/SlideContext';
import { SLIDES } from '@/types/slides';

export function DotNavigation() {
  const { currentSlide, goToSlide } = useSlideContext();

  return (
    <nav
      className="dot-nav hidden md:flex"
      aria-label="Page navigation"
    >
      <ul className="flex flex-col gap-4">
        {SLIDES.map((slide) => {
          const isActive = currentSlide === slide.id;
          return (
            <li key={slide.id}>
              <button
                onClick={() => goToSlide(slide.id)}
                className="group relative flex items-center justify-end"
                aria-label={`Go to ${slide.label}`}
                aria-current={isActive ? 'true' : undefined}
              >
                {/* Tooltip */}
                <span className="absolute right-6 whitespace-nowrap rounded bg-background-secondary px-2 py-1 text-xs text-foreground-muted opacity-0 transition-opacity group-hover:opacity-100">
                  {slide.label}
                </span>
                {/* Dot */}
                <motion.span
                  className={`block h-3 w-3 rounded-full border-2 transition-colors ${
                    isActive
                      ? 'border-accent bg-accent'
                      : 'border-foreground-muted bg-transparent hover:border-accent'
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
