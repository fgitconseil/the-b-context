import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const formation = defineCollection({
  loader: glob({ pattern: 'bloc-*.md', base: './src/content/formation' }),
  schema: z.object({
    bloc: z.number(),
    titre: z.string(),
    duree_estimee: z.string(),
    accroche: z.string(),
    categorie: z.enum(['Comprendre', 'Choisir', 'Méthode', 'Ouverture']),
    takeaway: z.string(),
    slides: z.array(z.object({
      index: z.number(),
      titre: z.string(),
      audio: z.string(),
      duration: z.number(),
      visuels: z.array(z.object({
        fichier: z.string(),
        t_start: z.number(),
        marqueurs: z.array(z.string()).default([]),
      })),
    })),
    quiz_inline: z.array(z.object({
      after_slide: z.number(),
      question: z.string(),
      options: z.array(z.string()),
      answer: z.number(),
      explanation: z.string().optional(),
    })).default([]),
    quiz_final: z.array(z.object({
      question: z.string(),
      options: z.array(z.string()),
      answer: z.number(),
      explanation: z.string().optional(),
    })).default([]),
  }),
});

export const collections = {
  formation,
};
