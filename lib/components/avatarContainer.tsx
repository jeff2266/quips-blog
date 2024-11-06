'use client'

import { Suspense, use } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import { useSuspenseQuery } from '@tanstack/react-query'
import { supabaseGroupOptions } from '@/lib/components/reactQueryProvider'
import { SupabaseContext } from '@/lib/components/supabaseProvider'
import Link from 'next/link'
import SpinLoader from '@/lib/components/spinLoader'
import * as Avatar from '@radix-ui/react-avatar'

export default function AvatarContainer() {

	return (
		<Link href="/auth" className="grid aspect-square w-8 place-content-stretch">
			<div className="grid overflow-hidden rounded-full p-0.5 aspect-square place-content-stretch text-center">
				<Suspense fallback={<AvatarSkeleton />}>
					<AvatarResolved />
				</Suspense>
			</div>
		</Link>
	)
}

function AvatarSkeleton() {
	return <SpinLoader speed={500} />
}

function AvatarResolved() {
	const supabase = { client: use(SupabaseContext), key: 'session'}
	const {
		data: {
			data: { session }
		}
	} = useSuspenseQuery(supabaseGroupOptions(supabase))

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
