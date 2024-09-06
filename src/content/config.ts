import { defineCollection, z } from 'astro:content';

const downloads = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const details = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});


export const collections = {
  'downloads': downloads,
  'details': details
};