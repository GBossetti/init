'use client';

import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';
import { Slide } from './Slide';

export function ContactSlide() {
  return (
    <Slide id="contact" background="secondary">
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="font-mono text-accent">What&apos;s next?</p>
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Get In Touch
          </h2>
          <p className="mx-auto max-w-lg text-foreground-muted">
            I&apos;m currently open to new opportunities. Whether you have a
            question or just want to say hi, feel free to reach out!
          </p>

          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <Link
              href="mailto:your.email@example.com"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Mail size={18} />
              Email me
            </Link>
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
              GitHub
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Linkedin size={18} />
              LinkedIn
            </Link>
          </div>
        </motion.div>

        {/* Footer credits */}
        <div className="mt-20 pt-8 border-t border-border">
          <p className="text-sm text-foreground-muted">
            Designed & Built by Gonzalo Bossetti Marín
          </p>
        </div>
      </div>
    </Slide>
  );
}
