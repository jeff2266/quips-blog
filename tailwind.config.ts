import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		borderColor: ({ colors }) => ({
			DEFAULT: 'var(--color-foreground)'
		}),
		extend: {
			colors: {
				background: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
				accent: 'var(--color-accent)',
				hover: 'var(--color-hover)',
				disabled: 'var(--color-disabled)',
			}
		}
	},
	plugins: []
}
export default config
