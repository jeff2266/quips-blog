import './globals.css'
import QuipsNhostProvider from '@/components/quipsNhostProvider'
import type { Metadata } from 'next'
import { Azeret_Mono } from 'next/font/google'

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
			<QuipsNhostProvider>
				<body className='place-items-center'>
					<div className={`${azeret.className} grid min-h-screen w-full min-w-max max-w-screen-lg p-2 md:p-8 antialiased`}>{children}</div>
				</body>
			</QuipsNhostProvider>
		</html>
	)
}
