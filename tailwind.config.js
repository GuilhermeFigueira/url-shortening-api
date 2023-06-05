/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				cyan: "hsl(180, 66%, 49%)",
				red: "hsl(0, 87%, 67%)",
				gray: "hsl(0, 0%, 75%)",
				dark_blue: "hsl(255, 11%, 22%)",
				violet: {
					very_dark: "hsl(260, 8%, 14%)",
					dark: "hsl(257, 27%, 26%)",
					grayish: "hsl(257, 7%, 63%)",
				},
			},
		},
	},
	plugins: [],
};
