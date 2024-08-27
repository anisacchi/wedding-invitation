import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./components/**/*.{js,ts,jsx,tsx,mdx}",
		"./app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			'black': '#333333',
			'white': '#F9F4EF',
			'cream': '#FFF5E1',
			'maroon-dark': '#800000',
			'maroon-light': '#B03A2E'
		},
		aspectRatio: {
			'9-16': '9 / 16'
		},
		fontFamily: {
			cursive: ['var(--font-sacramento)'],
			guest: ['var(--font-caveat)']
		}
	},
	plugins: [],
};

export default config;
