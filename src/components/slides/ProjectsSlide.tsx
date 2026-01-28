'use client';

import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { Slide } from './Slide';

const featuredProjects = [
  {
    title: 'Portfolio Website',
    description:
      'My personal portfolio built with Next.js, TypeScript, and Tailwind CSS. Features a full-page slide design with smooth animations.',
    tech: ['Next.js', 'TypeScript', 'Tailwind', 'Framer Motion'],
    github: 'https://github.com/yourusername/portfolio',
    live: '#',
    slug: 'portfolio',
  },
  {
    title: 'Coming Soon',
    description:
      'More projects coming soon. Check back later for updates on what I\'m working on!',
    tech: ['???'],
    slug: 'coming-soon',
  },
];

export function ProjectsSlide() {
  return (
    <Slide id="projects" background="default">
      <div className="mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="grid gap-6 md:grid-cols-2"
        >
          {featuredProjects.map((project) => (
            <motion.div
              key={project.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group rounded-lg border border-border bg-background-secondary p-6 transition-colors hover:border-border-hover"
            >
              <div className="mb-4 flex items-start justify-between">
                <h3 className="text-lg font-semibold text-foreground group-hover:text-accent">
                  {project.title}
                </h3>
                <div className="flex items-center gap-3">
                  {project.github && (
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted transition-colors hover:text-accent"
                      aria-label={`View ${project.title} on GitHub`}
                    >
                      <Github size={18} />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-foreground-muted transition-colors hover:text-accent"
                      aria-label={`View ${project.title} live`}
                    >
                      <ExternalLink size={18} />
                    </Link>
                  )}
                </div>
              </div>
              <p className="mb-4 text-sm text-foreground-muted">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent transition-colors hover:underline"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Slide>
  );
}
