'use client'

import { Suspense, use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { ResolveSession } from '../definitions/supabase'
import Link from 'next/link'
import * as Avatar from '@radix-ui/react-avatar'
import SpinLoader from './spinLoader'

export default function AvatarContainer({ resolveSession }: { resolveSession: ResolveSession }) {
	return (
		<Link href="/auth" className="grid aspect-square w-8 place-content-stretch">
			<div className="grid overflow-hidden rounded-full p-0.5 aspect-square place-content-stretch text-center">
				<Suspense fallback={<AvatarSkeleton />}>
					<AvatarResolved resolveSession={resolveSession} />
				</Suspense>
			</div>
		</Link>
	)
}

function AvatarSkeleton() {
	return <SpinLoader speed={500}/>
}

function AvatarResolved({ resolveSession }: { resolveSession: ResolveSession }) {
	const {
		data: { session }
	} = use(resolveSession)

	return (
		<>
			{session?.user ? (
				<Avatar.Root className="grid place-content-center border rounded-full">
					<Avatar.Image
						className="rounded-full"
						src={session?.user.user_metadata.avatar_url}
						alt={`avatar for ${session.user.email}`}
					/>
					<Avatar.Fallback delayMs={600} className="m-auto text-sm not-italic">
						{session.user.user_metadata.name.charAt(0).toUpperCase()}
					</Avatar.Fallback>
				</Avatar.Root>
			) : (
				<div className="grid place-content-center">
					<FontAwesomeIcon icon={faUser} className="w-full" />
				</div>
			)}
		</>
	)
}
