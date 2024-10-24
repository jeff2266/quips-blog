import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
	theme: {
		borderColor: ({ theme }) => ({
			DEFAULT: 'var(--color-foreground)',
			...theme('colors')
		}),
		borderWidth: ({ theme }) => ({
			DEFAULT: '0.7px',
			...theme('spacing')
		}),
		outlineWidth: ({}) => ({
			DEFAULT: '0.7px'
		}),
		extend: {
			colors: {
				background: 'var(--color-background)',
				foreground: 'var(--color-foreground)',
				accent: 'var(--color-accent)',
				hover: 'var(--color-hover)',
				disabled: 'var(--color-disabled)'
			}
		}
	},
	plugins: []
}
export default config
