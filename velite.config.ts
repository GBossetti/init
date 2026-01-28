import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeSlug from 'rehype-slug';
import remarkGfm from 'remark-gfm';
import { defineCollection, defineConfig, s } from 'velite';

const blogPosts = defineCollection({
  name: 'BlogPost',
  pattern: 'blog/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      description: s.string().max(300),
      date: s.isodate(),
      tags: s.array(s.string()).default([]),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: meta.basename?.replace(/\.mdx$/, '') ?? '',
      readingTime: Math.ceil(meta.content?.split(/\s+/).length ?? 0 / 200),
    })),
});

const projects = defineCollection({
  name: 'Project',
  pattern: 'projects/**/*.mdx',
  schema: s
    .object({
      title: s.string().max(100),
      description: s.string().max(300),
      date: s.isodate(),
      tags: s.array(s.string()).default([]),
      link: s.string().url().optional(),
      github: s.string().url().optional(),
      featured: s.boolean().default(false),
      published: s.boolean().default(true),
      body: s.mdx(),
    })
    .transform((data, { meta }) => ({
      ...data,
      slug: meta.basename?.replace(/\.mdx$/, '') ?? '',
    })),
});

export default defineConfig({
  root: 'content',
  output: {
    data: '.velite',
    assets: 'public/static',
    base: '/static/',
    name: '[name]-[hash:6].[ext]',
    clean: true,
  },
  collections: { blogPosts, projects },
  mdx: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'github-dark',
          keepBackground: true,
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          behavior: 'wrap',
          properties: {
            className: ['anchor'],
          },
        },
      ],
    ],
  },
});
