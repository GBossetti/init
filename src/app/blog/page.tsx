import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Thoughts on software development, technology, and things I learn along the way.',
};

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
  },
];

export default function BlogPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 py-20">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-foreground">
        Blog
      </h1>
      <p className="mb-12 text-lg text-foreground-muted">
        Thoughts on software development, technology, and things I learn along
        the way.
      </p>

      <div className="space-y-8">
        {posts.map((post) => (
          <article key={post.slug} className="group">
            <Link href={`/blog/${post.slug}`}>
              <div className="rounded-lg border border-border p-6 transition-colors hover:border-border-hover hover:bg-background-secondary">
                <div className="mb-2 flex items-center gap-4">
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

                <h2 className="mb-2 text-xl font-semibold text-foreground group-hover:text-accent">
                  {post.title}
                </h2>

                <p className="mb-4 text-foreground-muted">{post.description}</p>

                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded bg-background-tertiary px-2 py-1 font-mono text-xs text-foreground-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          </article>
        ))}
      </div>

      {posts.length === 0 && (
        <p className="text-center text-foreground-muted">
          No posts yet. Check back soon!
        </p>
      )}
    </div>
  );
}
