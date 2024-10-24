'use client'

import { useUserData } from '@nhost/nextjs'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'
import * as Avatar from '@radix-ui/react-avatar'

export default function Header() {
	const userData = useUserData()

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-2xl font-bold">Quips</h1>
			<Link href="/auth" className="grid aspect-square w-8 place-content-stretch">
				<div className="grid overflow-hidden rounded-full p-0.5 aspect-square place-content-stretch">
					{userData ? (
						<Avatar.Root className="grid place-content-center border rounded-full">
							<Avatar.Image
								className="rounded-full"
								src={userData.avatarUrl}
								alt={`avatar for ${userData.displayName}`}
							/>
							<Avatar.Fallback delayMs={600} className="m-auto text-sm not-italic">
								{userData.displayName.charAt(0)}
							</Avatar.Fallback>
						</Avatar.Root>
					) : (
						<div className="grid place-content-center">
							<FontAwesomeIcon icon={faUser} className="w-full" />
						</div>
					)}
				</div>
			</Link>
		</header>
	)
}
