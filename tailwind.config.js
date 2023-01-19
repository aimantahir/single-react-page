/** @type {import('tailwindcss').Config} */
module.exports = {
	mode: "jit",
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			// Font Family
			fontFamily: {
				sans: ["Open Sans", "sans-serif"],
				frank: ["Frank Ruhl Libre", "serif"],
			},
			// Container
			container: {
				center: true,
				screens: {
					lg: "1300px",
					md: "100%",
				},
				padding: {
					DEFAULT: "30px",
				},
			},

			// Font Size
			fontSize: {
				lg: "16px",
				xl: "42px",
			},

			// Leading
			lineHeight: {
				25: "25px",
			},

			// breakpoints
			screens: {
				"2xl": "1440px",
			},
		},
	},
	plugins: [],
};
