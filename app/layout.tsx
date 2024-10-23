import type { Metadata } from 'next'
import { Azeret_Mono } from 'next/font/google'
import './globals.css'

const azeret = Azeret_Mono({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '700']
})

export const metadata: Metadata = {
	title: 'Quips Blog'
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className={`${azeret.className} grid min-h-screen antialiased`}>
				{children}
			</body>
		</html>
	)
}
