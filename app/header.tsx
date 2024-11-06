'use client'

import dynamic from 'next/dynamic'

const AvatarContainer = dynamic(() => import('@/lib/components/avatarContainer'), { ssr: false })

export default function Header() {

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-2xl font-bold p-2 sm:p-4">Quips</h1>
			<AvatarContainer />
		</header>
	)
}
