// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"

/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://ashishlotake.com", // Change this to your production URL.
	description:
		"Dive deep into nitty-gritty of Data science, Machine learning & Artificial Intelligence with me!.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "https://picsum.photos/1200/630", // Change this to your .
		alt: "OpenGraph thumbnail description.", // Change thwebsite's thumbnailis to your website's thumbnail description.
		width: 1200,
		height: 630
	},
	siteName: "Ashish Lotake's digital garden", // Change this to your website's name,
	twitter: {
		card: "summary_large_image"
	}
}

/**
 * Defines the configuration for PWA webmanifest.
 */
export const manifest: Partial<ManifestOptions> = {
	name: "Ashish Lotake's digital garden", // Change this to your website's name.
	short_name: "Ashish digital garden", // Change this to your website's short name.
	description:
		"Dive deep into nitty-gritty of Data science, Machine learning & Artificial Intelligence with me!.", // Change this to your websites description.
	theme_color: "#f6f8f9", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "standalone",
	icons: [
		{
			src: "/favicons/favicon-192x192.png",
			sizes: "192x192",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png"
		},
		{
			src: "/favicons/favicon-512x512.png",
			sizes: "512x512",
			type: "image/png",
			purpose: "any maskable"
		}
	]
}
