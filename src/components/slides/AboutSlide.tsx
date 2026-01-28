'use client';

import { motion } from 'framer-motion';
import { Slide } from './Slide';

const skills = [
  'JavaScript (ES6+)',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Tailwind CSS',
  'Git',
  'HTML & CSS',
  'SQL',
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
                Hi! I&apos;m{' '}
                <span className="text-foreground">Gonzalo Bossetti Marín</span>,
                a software developer who enjoys building things that live on the
                internet and sharing what I learn along the way.
              </p>
              <p className="leading-relaxed">
                Today, my main focus is on building accessible, inclusive products
                and digital experiences. I&apos;m passionate about writing clean,
                maintainable code and continuously learning new technologies.
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
