'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Slide } from './Slide';
import { TechBackground } from '@/components/effects/TechBackground';
import { useSlideContext } from '@/context/SlideContext';

export function HeroSlide() {
  const { goToSlide } = useSlideContext();

  return (
    <Slide id="hero" background="pattern">
      <TechBackground variant="circuit" />
      <div className="relative z-20 mx-auto max-w-5xl px-6 py-20">
        <div className="space-y-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-mono text-accent"
          >
            Hi, wellcome. I&apos;m 
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl lg:text-7xl"
          >
            Gonzalo Bossetti
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-3xl font-bold tracking-tight text-foreground-muted sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Architecting social impact.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="max-w-xl text-lg text-foreground-muted"
          >
            I work at the intersection of high-level engineering and 
            human-centered problem solving. If you&apos;re facing a complex 
            challenge and need to turn it into a reliable digital product, 
            this is where{' '}
            <button
              type="button"
              onClick={() => goToSlide('contact')}
              className="font-medium text-accent underline-offset-4 hover:underline cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
            >
              we start
            </button>
            .
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="flex items-center gap-4 pt-6"
          >
            <Link
              href="https://github.com/GBossetti"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://www.linkedin.com/in/gonzalo-bossetti/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          onClick={() => goToSlide('about')}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-foreground-muted transition-colors hover:text-accent"
          aria-label="Scroll to about section"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown size={24} />
          </motion.div>
        </motion.button>
      </div>
    </Slide>
  );
}
