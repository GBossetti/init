'use client';

import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Slide } from './Slide';
import { TechBackground } from '@/components/effects/TechBackground';

const latestPosts = [
  {
    title: 'Hello World',
    description:
      'My first blog post - an introduction to who I am and what this site is about.',
    date: '2025-01-27',
    slug: 'hello-world',
  },
];

export function BlogSlide() {
  return (
    <Slide id="blog" background="pattern">
      <TechBackground variant="dots" />
      <div className="relative z-20 mx-auto max-w-5xl px-6 py-20">
        <div className="mb-12 flex items-center gap-4">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">
            Latest Posts
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
                staggerChildren: 0.1,
              },
            },
          }}
          className="space-y-6"
        >
          {latestPosts.map((post) => (
            <motion.article
              key={post.slug}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="group"
            >
              <Link href={`/blog/${post.slug}`} className="block">
                <div className="rounded-lg border border-border bg-background/50 p-6 backdrop-blur-sm transition-colors hover:border-border-hover hover:bg-background-secondary/50">
                  <time className="font-mono text-sm text-foreground-muted">
                    {post.date}
                  </time>
                  <h3 className="mt-2 text-lg font-semibold text-foreground group-hover:text-accent">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-foreground-muted">{post.description}</p>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-accent transition-colors hover:underline"
          >
            Read all posts
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </Slide>
  );
}
