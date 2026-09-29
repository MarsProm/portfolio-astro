import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/projects' }),
  schema: z.object({
    title: z.string(),
    eyebrow: z.string(),
    summary: z.string(),
    year: z.number(),
    role: z.string(),
    type: z.string(),
    status: z.enum(['real', 'conceptual']),
    featured: z.boolean().default(false),
    order: z.number(),
    cover: z.string(),
    coverAlt: z.string(),
    stack: z.array(z.string()),
    problem: z.string(),
    solution: z.string(),
    outcomes: z.array(z.string()),
    gallery: z.array(z.object({ src: z.string(), alt: z.string() })),
    links: z.object({
      demo: z.url().optional(),
      github: z.url().optional(),
    }).optional(),
  }),
});

export const collections = { projects };
