/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export const darkMode = ["class"];
export const content = [
	"./pages/**/*.{ts,tsx}",
	"./components/**/*.{ts,tsx}",
	"./app/**/*.{ts,tsx}",
	"./src/**/*.{ts,tsx}",
];
export const prefix = "";
export const theme = {
	container: {
		center: true,
		padding: "0rem",
		screens: {
			"2xl": "1400px",
		},
	},
	extend: {
		colors: {
			cBlue: "#320045",
			cOrange:"#FF7B4B",
			cYellow:"#FCB045",
			border: "hsl(var(--border))",
			input: "hsl(var(--input))",
			ring: "hsl(var(--ring))",
			background: "hsl(var(--background))",
			foreground: "hsl(var(--foreground))",
			primary: {
				DEFAULT: "hsl(var(--primary))",
				foreground: "hsl(var(--primary-foreground))",
			},
			secondary: {
				DEFAULT: "hsl(var(--secondary))",
				foreground: "hsl(var(--secondary-foreground))",
			},
			destructive: {
				DEFAULT: "hsl(var(--destructive))",
				foreground: "hsl(var(--destructive-foreground))",
			},
			muted: {
				DEFAULT: "hsl(var(--muted))",
				foreground: "hsl(var(--muted-foreground))",
			},
			accent: {
				DEFAULT: "hsl(var(--accent))",
				foreground: "hsl(var(--accent-foreground))",
			},
			popover: {
				DEFAULT: "hsl(var(--popover))",
				foreground: "hsl(var(--popover-foreground))",
			},
			card: {
				DEFAULT: "hsl(var(--card))",
				foreground: "hsl(var(--card-foreground))",
			},
		},
		borderRadius: {
			lg: "var(--radius)",
			md: "calc(var(--radius) - 2px)",
			sm: "calc(var(--radius) - 4px)",
		},
		keyframes: {
			"accordion-down": {
				from: { height: "0" },
				to: { height: "var(--radix-accordion-content-height)" },
			},
			"accordion-up": {
				from: { height: "var(--radix-accordion-content-height)" },
				to: { height: "0" },
			},
		},
		animation: {
			"accordion-down": "accordion-down 0.2s ease-out",
			"accordion-up": "accordion-up 0.2s ease-out",
		},
		fontFamily: {
			body: ["Montserrat"],
		},
		boxShadow: {
			mm2024: " 8px 7px 4px 0px rgba(0, 0, 0, 0.90)",
		},
		padding: {
			mm_sm: "4rem",
			mm_md: "6rem",
			mm_lg: "8rem",
			mm_esm: "2rem",
		},
		fontFamily: {
			alinsa: ['alinsa'], // Create a new utility name
		  },
		
		  backgroundPosition: {
			bottom: 'bottom',
			'bottom-4': 'center bottom 100rem',
			center: 'center',
			left: 'left',
			'left-bottom': 'left bottom',
			'left-top': 'left top',
			right: 'right',
			'right-bottom': 'right bottom',
			'right-top': 'right top',
			top: 'top',
			'top-4': 'center top 1rem',
		  }
	},
};
export const plugins = [require("tailwindcss-animate")];
