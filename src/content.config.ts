import { defineCollection } from 'astro:content';
import { file } from 'astro/loaders';
import { z } from 'astro/zod';

const beers = defineCollection({
	loader: file('src/data/beers.json'),
	schema: z.object({
		name: z.string(),
		style: z.string(),
		abv: z.number(),
		description: z.string(),
		status: z.enum(['on-tap', 'coming-soon', 'retired']),
	}),
});

export const collections = { beers };
