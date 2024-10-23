'use client'

import Link from 'next/link'
import { SignedIn, SignedOut, useProviderLink, useSignOut, useUserData } from '@nhost/nextjs'

export default function SignIn() {
	const { google } = useProviderLink()
	const { signOut } = useSignOut()
	const userData = useUserData()

	return (
		<div>
			<SignedOut>
				<Link href={google} className="min-w-max">
					Sign in with Google
				</Link>
			</SignedOut>
			<SignedIn>
				<div>{userData?.email}</div>
				<Link href="/" onClick={signOut}>Sign Out</Link>
			</SignedIn>
		</div>
	)
}
