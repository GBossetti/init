import type { Metadata } from 'next';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/PageLayout';

// Placeholder data - will be replaced with Velite
const projects = [
  {
    slug: 'portfolio-website',
    title: 'Portfolio Website',
    description:
      'My personal portfolio website built with Next.js, TypeScript, and Tailwind CSS.',
    tags: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Velite'],
    github: 'https://github.com/yourusername/gonzalo-portfolio',
    link: undefined,
    date: '2025-01-27',
    content: `
      <h2>About This Project</h2>
      <p>This is the website you're currently viewing. It serves as my personal brand and showcases my work as a software developer.</p>

      <h2>Tech Stack</h2>
      <ul>
        <li><strong>Framework:</strong> Next.js 16 with App Router</li>
        <li><strong>Language:</strong> TypeScript (strict mode)</li>
        <li><strong>Styling:</strong> Tailwind CSS v4</li>
        <li><strong>Content:</strong> MDX with Velite</li>
        <li><strong>Hosting:</strong> Vercel</li>
      </ul>

      <h2>Features</h2>
      <ul>
        <li>Dark theme with techy aesthetic</li>
        <li>Type-safe content management</li>
        <li>Syntax-highlighted code blocks</li>
        <li>SEO optimized</li>
        <li>Fully responsive</li>
      </ul>
    `,
  },
];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: 'Project Not Found' };
  }

  return {
    title: project.title,
    description: project.description,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <PageLayout>
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/projects"
        className="mb-8 inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to projects
      </Link>

      <header className="mb-12">
        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          {project.title}
        </h1>
        <p className="mb-6 text-lg text-foreground-muted">
          {project.description}
        </p>

        <div className="mb-6 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <Link
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-foreground-muted transition-colors hover:border-accent hover:text-accent"
            >
              <Github size={18} />
              View Source
            </Link>
          )}
          {project.link && (
            <Link
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-white transition-colors hover:bg-accent-hover"
            >
              <ExternalLink size={18} />
              Live Demo
            </Link>
          )}
        </div>
      </header>

      <article
        className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-strong:text-foreground prose-li:text-foreground-muted"
        dangerouslySetInnerHTML={{ __html: project.content }}
      />
    </div>
    </PageLayout>
  );
}
