import type { Metadata } from 'next';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PageLayout } from '@/components/PageLayout';

// Placeholder data - will be replaced with Velite
const posts = [
  {
    slug: 'hello-world',
    title: 'Hello World',
    description:
      'My first blog post - an introduction to who I am and what this site is about.',
    date: '2025-01-27',
    tags: ['personal', 'introduction'],
    readingTime: 2,
    content: `
      <h1>Hello World</h1>
      <p>Welcome to my blog. This is where I share my thoughts on software development, technology, and other topics that interest me.</p>

      <h2>What to Expect</h2>
      <p>I plan to write about:</p>
      <ul>
        <li>Software development practices</li>
        <li>Technologies I'm learning</li>
        <li>Projects I'm working on</li>
        <li>Lessons learned along the way</li>
      </ul>

      <h2>A Code Example</h2>
      <p>Here's a simple TypeScript function:</p>
      <pre><code class="language-typescript">function greet(name: string): string {
  return \`Hello, \${name}!\`;
}

console.log(greet('World'));</code></pre>

      <p>Stay tuned for more content.</p>
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
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    return { title: 'Post Not Found' };
  }

  return {
    title: post.title,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      type: 'article',
      publishedTime: post.date,
    },
  };
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <PageLayout>
    <div className="mx-auto max-w-3xl px-6 py-20">
      <Link
        href="/blog"
        className="mb-8 inline-flex items-center gap-2 text-foreground-muted transition-colors hover:text-accent"
      >
        <ArrowLeft size={16} />
        Back to blog
      </Link>

      <header className="mb-12 border-b border-border pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-4">
          <time className="font-mono text-sm text-foreground-muted">
            {new Date(post.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </time>
          <span className="font-mono text-sm text-foreground-muted">
            {post.readingTime} min read
          </span>
        </div>

        <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
          {post.title}
        </h1>

        <p className="text-lg text-foreground-muted">{post.description}</p>

        <div className="mt-6 flex flex-wrap gap-2">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted"
            >
              {tag}
            </span>
          ))}
        </div>
      </header>

      <article
        className="prose prose-invert max-w-none prose-headings:text-foreground prose-p:text-foreground-muted prose-strong:text-foreground prose-li:text-foreground-muted prose-code:text-foreground prose-pre:bg-background-secondary prose-pre:border prose-pre:border-border"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />
    </div>
    </PageLayout>
  );
}
