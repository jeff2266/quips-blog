import '@fortawesome/fontawesome-svg-core/styles.css'
import './globals.css'
import type { Metadata } from 'next'
import { Azeret_Mono } from 'next/font/google'
import SupabaseQueryProvider from '@/lib/components/supabaseQueryProvider'

const azeret = Azeret_Mono({
	subsets: ['latin'],
	style: ['normal', 'italic'],
	weight: ['400', '700']
})

export const metadata: Metadata = {
	title: 'Quips Blog'
}

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return (
		<html lang="en">
			<body className="place-items-center">
				<SupabaseQueryProvider>
					<div
						className={`${azeret.className} grid min-h-screen w-full min-w-max max-w-screen-lg p-2 md:p-8 antialiased`}>
						{children}
					</div>
				</SupabaseQueryProvider>
			</body>
		</html>
	)
}
