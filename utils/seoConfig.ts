// Type imports
import type { ManifestOptions } from "vite-plugin-pwa"
/**
 * Defines the default SEO configuration for the website.
 */
export const seoConfig = {
	baseURL: "https://ashishlotake-comv2.vercel.app", // Change this to your production URL.
	description:
		"Dive deep into nitty-gritty of Data science, Machine learning & Artificial Intelligence with me!.", // Change this to be your website's description.
	type: "website",
	image: {
		url: "/opengraph.jpg", // Change this to your .
		alt: "OpenGraph thumbnail description.", // Change thwebsite's thumbnailis to your website's thumbnail description.
		width: 1200,
		height: 700
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
	short_name: "Ashish Digital Garden", // Change this to your website's short name.
	description:
		"Dive deep into nitty-gritty of Data science, Machine learning & Artificial Intelligence with me!.", // Change this to your websites description.
	theme_color: "#ffffff", // Change this to your primary color.
	background_color: "#ffffff", // Change this to your background color.
	display: "standalone",
	icons: [
		{
			src: "/favicons/favicon-72x72.png",
			type: "image/png",
			sizes: "72x72",
			purpose: "any maskable"
		},
		{
			src: "/favicons/favicon-96x96.png",
			type: "image/png",
			sizes: "96x96",
			purpose: "any maskable"
		},
		{
			src: "/favicons/favicon-128x128.png",
			type: "image/png",
			sizes: "128x128",
			purpose: "any maskable"
		},
		{
			src: "/favicons/favicon-144x144.png",
			type: "image/png",
			sizes: "144x144",
			purpose: "any maskable"
		},
		{
			src: "/favicons/favicon-152x152.png",
			type: "image/png",
			sizes: "152x152",
			purpose: "any maskable"
		},
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
