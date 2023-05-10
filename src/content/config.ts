// 1. Import utilities from `astro:content`
import { z, defineCollection } from "astro:content"

// 2. Define your collection(s)
const blogCollection = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}),
		publishDate: z.string().transform((str) => new Date(str)),
		author: z.string().default("Ashish Lotake"),
		category: z.string(),
		tags: z.array(z.string())
	})
})

const projectCollection = defineCollection({
	schema: z.object({
		draft: z.boolean(),
		title: z.string(),
		snippet: z.string(),
		image: z.object({
			src: z.string(),
			alt: z.string()
		}),
		publishDate: z.string().transform((str) => new Date(str)),
		author: z.string().default("Ashish Lotake"),
		category: z.string(),
		tags: z.array(z.string()),
		icon: z.string(),
		iconstyle: z.string().optional(),
		lang: z.string(),
		webapp: z
			.object({
				link: z.string(),
				name: z.string()
			})
			.optional(),
		source: z
			.object({
				link: z.string(),
				name: z.string()
			})
			.optional()
	})
})

// 3. Export a single `collections` object to register your collection(s)
//    This key should match your collection directory name in "src/content"
export const collections = {
	blog: blogCollection,
	project: projectCollection
}
