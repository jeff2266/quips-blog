'use client'

import dynamic from 'next/dynamic'

const SignIn = dynamic(() => import('./signIn'), { ssr: false })

export default function Page() {

	return <SignIn />
}
