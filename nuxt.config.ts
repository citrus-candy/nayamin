import { defineNuxtConfig } from 'nuxt3'

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
	css: ['@/assets/css/tailwind.css'],
	build: {
		postcss: {
			postcssOptions: {
				plugins: {
					tailwindcss: {},
					autoprefixer: {},
				},
			},
		},
	},
	publicRuntimeConfig: {
		API_KEY: process.env.API_KEY,
		AUTH_DOMAIN: process.env.AUTH_DOMAIN,
		PROJECT_ID: process.env.PROJECT_ID,
		STORAGE_BUCKET: process.env.STORAGE_BUCKET,
		MESSAGING_SENDER_ID: process.env.MESSAGING_SENDER_ID,
		APP_ID: process.env.APP_ID,
		MEASUREMENT_ID: process.env.MEASUREMENT_ID,
	},
})
