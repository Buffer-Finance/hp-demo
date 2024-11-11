/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: ["./index.html", "./src/**/*.{html,js,jsx,ts,tsx}"],
	theme: {
		extend: {
			screens: {
				xs: "480px",
				sm: "576px",
				md: "768px",
				lg: "992px",
				xl: "1200px",
				xxl: "1600px",
			},
			colors: {
				background: "hsl(var(--background))",
				primary: {
					DEFAULT: "hsl(var(--primary))",
					foreground: "hsl(var(--primary-foreground))",
				},
				secondary: {
					DEFAULT: "hsl(var(--secondary))",
					foreground: "hsl(var(--secondary-foreground))",
				},
				accent: {
					DEFAULT: "hsl(var(--accent))",
					foreground: "hsl(var(--accent-foreground))",
				},
				border: "hsl(var(--border))",
				foreground: "hsl(var(--foreground))",
				card: {
					DEFAULT: "hsl(var(--card))",
					foreground: "hsl(var(--card-foreground))",
				},
				popover: {
					DEFAULT: "hsl(var(--popover))",
					foreground: "hsl(var(--popover-foreground))",
				},
				muted: {
					DEFAULT: "hsl(var(--muted))",
					foreground: "hsl(var(--muted-foreground))",
				},
				destructive: {
					DEFAULT: "hsl(var(--destructive))",
					foreground: "hsl(var(--destructive-foreground))",
				},
				input: "hsl(var(--input))",
				ring: "hsl(var(--ring))",
				chart: {
					1: "hsl(var(--chart-1))",
					2: "hsl(var(--chart-2))",
					3: "hsl(var(--chart-3))",
					4: "hsl(var(--chart-4))",
					5: "hsl(var(--chart-5))",
				},

				surface: {
					DEFAULT: "hsl(var(--surface) / <alpha-value>)",
					light: "hsl(var(--surface-light) / <alpha-value>)",
					dark: "hsl(var(--surface-dark) / <alpha-value>)",
				},

				accent: {
					DEFAULT: "hsl(var(--accent) / <alpha-value>)",
					light: "hsl(var(--accent-light) / <alpha-value>)",
					mint: "hsl(var(--accent-mint) / <alpha-value>)",
					red: "hsl(var(--accent-red) / <alpha-value>)",
					green: "hsl(var(--accent-green) / <alpha-value>)",
					blue: "hsl(var(--accent-blue) / <alpha-value>)",
				},
			},
			fontFamily: {
				inter: ['"Inter"', "sans-serif"],
				playfair: ['"Playfair Display"', "serif"],
			},
		},
	},
	plugins: [require("tailwind-scrollbar"), require("tailwindcss-animate")],
};
