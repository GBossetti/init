import { ArrowRight, Github, Linkedin } from 'lucide-react';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="mx-auto max-w-5xl px-6">
      {/* Hero Section */}
      <section className="flex min-h-[calc(100vh-4rem)] flex-col justify-center py-20">
        <div className="space-y-6">
          <p className="font-mono text-accent">Hi, my name is</p>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Gonzalo Bossetti Marín.
          </h1>
          <h2 className="text-3xl font-bold tracking-tight text-foreground-muted sm:text-4xl md:text-5xl">
            I build things for the web.
          </h2>
          <p className="max-w-xl text-lg text-foreground-muted">
            I&apos;m a software developer passionate about creating quality
            software and sharing knowledge. Currently focused on building
            accessible, human-centered products.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-4">
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-accent-hover"
            >
              View my work
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 rounded-lg border border-border px-6 py-3 font-medium text-foreground transition-colors hover:border-border-hover hover:bg-background-secondary"
            >
              About me
            </Link>
          </div>

          <div className="flex items-center gap-4 pt-6">
            <Link
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-accent"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground-muted transition-colors hover:text-accent"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground">
            Featured Projects
          </h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Placeholder for featured projects - will be populated from Velite */}
          <div className="group rounded-lg border border-border bg-background-secondary p-6 transition-colors hover:border-border-hover">
            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent">
              Portfolio Website
            </h3>
            <p className="mb-4 text-sm text-foreground-muted">
              My personal portfolio built with Next.js, TypeScript, and Tailwind
              CSS.
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted">
                Next.js
              </span>
              <span className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted">
                TypeScript
              </span>
              <span className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted">
                Tailwind
              </span>
            </div>
          </div>

          <div className="group rounded-lg border border-border bg-background-secondary p-6 transition-colors hover:border-border-hover">
            <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-accent">
              Coming Soon
            </h3>
            <p className="mb-4 text-sm text-foreground-muted">
              More projects coming soon. Check back later!
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted">
                ???
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-accent transition-colors hover:underline"
          >
            View all projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section className="py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground">Latest Posts</h2>
          <div className="h-px flex-1 bg-border" />
        </div>

        <div className="space-y-6">
          {/* Placeholder for blog posts - will be populated from Velite */}
          <article className="group">
            <Link href="/blog/hello-world" className="block">
              <div className="rounded-lg border border-border p-6 transition-colors hover:border-border-hover hover:bg-background-secondary">
                <time className="font-mono text-sm text-foreground-muted">
                  2025-01-27
                </time>
                <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent">
                  Hello World
                </h3>
                <p className="mt-2 text-foreground-muted">
                  My first blog post - an introduction to who I am and what this
                  site is about.
                </p>
              </div>
            </Link>
          </article>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent transition-colors hover:underline"
          >
            Read all posts
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
