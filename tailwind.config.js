/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-bg': '#f4f4f4',
				'custom-red': '#ee3914',
				'custom-background': '#cce3f3',
				customMain: '#4d3be5',
				hoverCustomMain: '#7366e5',
			},
		},
	},
	plugins: [],
};
