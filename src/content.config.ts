import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const formation = defineCollection({
  loader: glob({ pattern: 'bloc-*.md', base: './src/content/formation' }),
  schema: z.object({
    bloc: z.number().int().min(1).max(5),
    titre: z.string(),
    duree_estimee: z.string().optional(),
    audio: z.string().optional(),
    takeaway: z.string().optional(),
    accroche: z.string().optional(),
    categorie: z.string().optional(),
    slides: z.array(z.object({
      index: z.number(),
      titre: z.string(),
      visuel: z.string(),
      message_cle: z.string().optional(),
      t_start: z.number(),
      marqueurs: z.array(z.string()).optional(),
    })),
    quiz_inline: z.array(z.object({
      after_slide: z.number(),
      question: z.string(),
      options: z.array(z.string()),
      answer: z.number(),
      explanation: z.string().optional(),
    })).optional(),
    quiz_final: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      answer: z.number(),
      explanation: z.string().optional(),
    })).optional(),
  }),
});

export const collections = {
  formation,
};
