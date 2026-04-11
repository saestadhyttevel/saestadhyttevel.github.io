// 1. Import utilities from `astro:content`
import { defineCollection } from 'astro:content';

// 2. Import loader(s)
import { glob, file } from 'astro/loaders';

// 3. Import Zod
import { z } from 'astro/zod';

// 4. Define a `loader` and `schema` for each collection
const innlegg = defineCollection({
  loader: glob({ base: './src/content/innlegg', pattern: '**/*.{md,mdx}' }),
  schema: z.object({
    tittel: z.string(),
    forfatter: z.string(),
    sammendrag: z.string(),
    datoPublisert: z.coerce.date(),
    datoOppdatert: z.coerce.date().optional(),
    kategorier: z.array(z.string()),
  }),
});

// 5. Export a single `collections` object to register your collection(s)
export const collections = { innlegg };