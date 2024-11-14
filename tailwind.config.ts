import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			colors: {
				darkmode: '#17191E'
			},
			fontFamily: {
				inter: ['Inter']
			},
			dropShadow: {
				glow: ['0 0px 20px rgba(255,255, 255, 0.35)', '0 0px 65px rgba(255, 255,255, 0.2)']
			},
		}
	},

	plugins: [typography],
	darkMode: 'selector'
} satisfies Config;
