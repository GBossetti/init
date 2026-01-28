import type { Metadata } from 'next';
import { ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { PageLayout } from '@/components/PageLayout';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'A collection of projects I have worked on - web applications, tools, and experiments.',
};

// This will be replaced with Velite data once the build runs
const projects = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Velite'],
    github: 'https://github.com/yourusername/gonzalo-portfolio',
    link: undefined,
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <PageLayout>
    <div className="mx-auto max-w-5xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Projects
      </h1>
      <p className="mb-12 text-lg text-foreground-muted">
        A collection of things I&apos;ve built. Some are serious, some are just
        for fun.
      </p>

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <article
            key={project.slug}
            className="group flex flex-col rounded-lg border border-border bg-background-secondary p-6 transition-colors hover:border-border-hover"
          >
            <div className="mb-4 flex items-start justify-between">
              <h2 className="text-xl font-semibold text-foreground group-hover:text-accent">
                <Link href={`/projects/${project.slug}`}>{project.title}</Link>
              </h2>
              <div className="flex gap-3">
                {project.github && (
                  <Link
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted transition-colors hover:text-accent"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <Github size={20} />
                  </Link>
                )}
                {project.link && (
                  <Link
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-foreground-muted transition-colors hover:text-accent"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink size={20} />
                  </Link>
                )}
              </div>
            </div>

            <p className="mb-4 flex-1 text-foreground-muted">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted"
                >
                  {tag}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
    </PageLayout>
  );
}
