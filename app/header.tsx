'use client'

import Link from 'next/link'
import { SignedIn, SignedOut, useProviderLink, useSignOut, useUserData } from '@nhost/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import AnimateText from '@/components/animateText'

export default function Header() {
	const { google } = useProviderLink()
	const { signOut } = useSignOut()
	const userData = useUserData()

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-lg font-bold">Quips</h1>
			<FontAwesomeIcon icon={faUser} />
			<div>
				<SignedOut>
					<Link href={google} className="min-w-max">
						Sign in with Google
					</Link>
				</SignedOut>
				<SignedIn>
					<div>{userData?.email}</div>
					<button onClick={signOut}>Sign Out</button>
				</SignedIn>
			</div>
		</header>
	)
}
