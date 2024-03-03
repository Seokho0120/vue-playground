/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				'custom-bg': '#f4f4f4',
				'custom-red': '#ee3914',
			},
		},
	},
	plugins: [],
};
