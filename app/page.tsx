'use client'

import Link from 'next/link'
import { nhost } from '@/lib/nhost'
import { NhostProvider, SignedIn, useProviderLink, useSignOut } from '@nhost/nextjs'

function App() {
	return (
		<NhostProvider nhost={nhost}>
			<Home />
		</NhostProvider>
	)
}

function Home() {

	const { google } = useProviderLink()
	const { signOut } = useSignOut()

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
			<main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
				<Link href={google}>Sign in with Google</Link>
				<button onClick={signOut}>Sign out</button>
				<SignedIn>You are signed in</SignedIn>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center"></footer>
		</div>
	)
}

export default App
