import { defineConfig } from "astro/config"

// Astro integration imports
import tailwind from "@astrojs/tailwind"
import sitemap from "@astrojs/sitemap"
import compress from "astro-compress"
import { VitePWA } from "vite-plugin-pwa"
import image from "@astrojs/image"
import AutoImport from "astro-auto-import"
import mdx from "@astrojs/mdx"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeSlug from "rehype-slug"
import remarkToc from "remark-toc"
import { rehypeHeadingIds } from "@astrojs/markdown-remark"

// Helper imports
import { manifest, seoConfig } from "./utils/seoConfig"

export default defineConfig({
	site: seoConfig.baseURL,
	integrations: [
		tailwind({
			config: {
				applyBaseStyles: false,
				path: "./tailwind.config.js"
			}
		}),
		image(),
		sitemap(),
		compress(),
		AutoImport({
			imports: [
				{
					"accessible-astro-components": [
						"Notification",
						"Media",
						"Accordion",
						"AccordionItem",
						"Modal"
					],
					"astro-icon": ["Icon"],
					"@component/PicWithCap/PicWithCap.astro": [["default", "PicWithCap"]],
					"@component/Button/Button.astro": [["default", "Button"]],
					"@component/Container/Container.astro": [["default", "Container"]],
					"astro-embed": ["Vimeo", "YouTube"],
					"@astrojs/image/components": ["Picture"],
					"@component/Link/Link.astro": [["default", "Link"]]
				}
			]
		}),
		mdx()
	],
	markdown: {
		remarkPlugins: [[remarkToc, { heading: "contents" }]],
		rehypePlugins: [
			rehypeHeadingIds,
			rehypeSlug,
			[rehypeAutolinkHeadings, { behavior: "append" }]
		],
		syntaxHighlight: "shiki",
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: "dark-plus",
			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: [],
			// Enable word wrap to prevent horizontal scrolling
			wrap: false
		}
	},
	vite: {
		plugins: [
			VitePWA({
				registerType: "autoUpdate",
				manifest,
				workbox: {
					globDirectory: "dist",
					globPatterns: [
						"**/*.{js,css,svg,png,jpg,jpeg,gif,webp,woff,woff2,ttf,eot,ico}"
					],
					// Don't fallback on document based (e.g. `/some-page`) requests
					// This removes an errant console.log message from showing up.
					navigateFallback: null
				}
			})
		]
	}
})
