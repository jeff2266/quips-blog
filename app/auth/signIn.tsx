'use client'

import { use } from 'react'
import { ResolveSession } from '@/lib/definitions/supabase'
import { SupabaseContext } from '@/lib/components/supabaseProvider'

export default function SignIn({ resolveSession }: { resolveSession: ResolveSession }) {
	const supabase = use(SupabaseContext)
	const { data: { session } } = use(resolveSession)

	return (
		<div>
			{session?.user ? (
				<button onClick={() => supabase?.auth.signOut().finally(() => console.log('signed out'))}>Sign Out</button>
			) : (
				<button
					onClick={() => supabase?.auth.signInWithOAuth({ provider: 'google' }).finally(() => console.log('signed in'))}
					className="min-w-max">
					Sign in with Google
				</button>
			)}
		</div>
	)
}
