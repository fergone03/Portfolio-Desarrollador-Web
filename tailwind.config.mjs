/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				accent: '#22c55e',
			},
			backgroundImage: {
				'grid-dots': 'radial-gradient(circle, rgba(255,255,255,0.06) 1px, transparent 1px)',
			},
			backgroundSize: {
				'grid-28': '28px 28px',
			},
		},
	},
	plugins: [],
}
