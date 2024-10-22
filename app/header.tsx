'use client'

import Link from "next/link"
import { SignedIn, SignedOut, useProviderLink, useSignOut, useUserData } from "@nhost/nextjs"
				
export default function Header() {

	const { google } = useProviderLink()
	const { signOut } = useSignOut()
    const userData = useUserData()

    return (
        <>
		<SignedOut>
			<Link href={google}>Sign in with Google</Link>
		</SignedOut>
        <SignedIn>
            <div>{userData?.email}</div>
            <button onClick={signOut}>Sign Out</button>
        </SignedIn>
        </>
	)
}