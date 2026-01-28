'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';

export function SlideHeader() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 100], [0, 1]);
  const backdropBlur = useTransform(scrollY, [0, 100], [0, 12]);

  return (
    <motion.header
      className="fixed left-0 right-0 top-0 z-50"
      style={{
        opacity,
        backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
      }}
    >
      <div className="border-b border-border/50 bg-background/80">
        <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
          <Link
            href="#hero"
            className="font-mono text-sm font-medium text-foreground transition-colors hover:text-accent"
          >
            GB
          </Link>
          <nav className="flex items-center gap-6">
            <Link
              href="/blog"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Blog
            </Link>
            <Link
              href="/projects"
              className="text-sm text-foreground-muted transition-colors hover:text-foreground"
            >
              Projects
            </Link>
          </nav>
        </div>
      </div>
    </motion.header>
  );
}
