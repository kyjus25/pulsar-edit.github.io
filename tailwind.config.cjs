/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				canvas: "#212931",
				text: "#212931",
				primary: "#18bfef"
			},
			fontFamily: {
				body: ['Merriweather', 'serif'],
				headings: ['Source Sans Pro', 'sans-serif']
			},
			backgroundImage: {
				backdrop: "url(/grain.png),linear-gradient(0deg,rgba(0,0,0,.1),rgba(0,0,0,.1)),url(/bg.jpg)"
			},
			backgroundSize: {
				'large': "120%"
			},
			animation: {
				fadeIn: 'fadeIn 2.5s ease forwards',
				fadeUp: 'fadeUp 1s ease forwards',
				fadeUpMore: 'fadeUpMore 1.2s ease forwards',
			},
			keyframes: {
				fadeIn: {
					'0%': {opacity: '0'},
					'100%': {opacity: '1'}
				},
				fadeUp: {
					'0%': {top: '1rem', opacity: 0},
					'100%': {top: '0', opacity: 1}
				},
				fadeUpMore: {
					'0%': {top: '4rem', opacity: 0},
					'100%': {top: '0', opacity: 1}
				}
			}
		},
	},
	plugins: [
		require('@tailwindcss/typography')
	],
}
