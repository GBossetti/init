'use client';

import { motion } from 'framer-motion';
import { Slide } from './Slide';

const skills = [
  'Java',
  'Python',
  'SQL',
  'Docker',
  'Kubernetes',
  'Git'
];

export function AboutSlide() {
  return (
    <Slide id="about" background="secondary">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          {/* About text */}
          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
                About Me
              </h2>
              <div className="h-px flex-1 bg-border" />
            </div>

            <div className="space-y-4 text-foreground-muted">
              <p className="text-lg leading-relaxed">
                Hello! I&apos;m{' '}
                <span className="text-foreground">Gonzalo</span>,
                I&apos;m currently focused on designing human-centered 
                products that solve real, everyday problems.
                My approach bridges engineering rigor with social impact, 
                ensuring that technology is not only scalable, 
                but also responsible and usable.
              </p>
              <p className="text-lg leading-relaxed">
                I don&apos;t just build software.
              </p>
              <p className="text-lg leading-relaxed">
                I help define what should be built and how to validate it early.
              </p>
            </div>
          </div>

          {/* Skills grid */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-foreground">
              Technologies I work with
            </h3>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.05,
                  },
                },
              }}
              className="grid grid-cols-2 gap-2 sm:grid-cols-3"
            >
              {skills.map((skill) => (
                <motion.div
                  key={skill}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="flex items-center gap-2 text-foreground-muted"
                >
                  <span className="text-accent">▹</span>
                  <span className="font-mono text-sm">{skill}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </Slide>
  );
}
