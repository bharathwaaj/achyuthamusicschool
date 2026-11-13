import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Blog posts live in src/content/blog as Markdown files. Each post should
 * answer one real question a parent or learner might search for, using
 * facts and experience from the school's teachers. See
 * docs/blog-topics.md for planned topics.
 */
const blog = defineCollection({
  // Files starting with an underscore, such as _template.md, are skipped.
  loader: glob({ pattern: '**/[^_]*.md', base: './src/content/blog' }),
  schema: ({ image }) =>
    z.object({
      /** Shown as the page heading and in search results. */
      title: z.string().max(70),
      /** Search result snippet; keep it under about 155 characters. */
      description: z.string().max(160),
      /** First published date, as YYYY-MM-DD. */
      published: z.coerce.date(),
      /** Date of the last meaningful change, if any. */
      updated: z.coerce.date().optional(),
      /** The teacher whose experience the post is based on. */
      author: z.string(),
      /** The class the post relates to, for linking back. */
      relatedClass: z.enum(['veena', 'violin', 'vocal']).optional(),
      /** Optional photo for the post and its share preview. */
      image: image().optional(),
      imageAlt: z.string().optional(),
      /** Drafts are left out of the built site. */
      draft: z.boolean().default(false),
    }),
});

export const collections = { blog };
