'use client'

import { SupabaseContext } from '@/lib/components/supabaseProvider'
import { use } from 'react'
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { supabaseGroupOptions } from '@/lib/components/reactQueryProvider'

export default function SignIn() {
	const supabase = { client: use(SupabaseContext), key: 'session'}
	const supabaseQueryClient = useQueryClient()
	const {
		data: {
			data: { session }
		}
	} = useSuspenseQuery(supabaseGroupOptions(supabase))

	return (
		<div>
			{session?.user ? (
				<button onClick={() => supabase.client.auth.signOut().finally(() => supabaseQueryClient.invalidateQueries({ queryKey: [supabase]}))}>Sign Out</button>
			) : (
				<button
					onClick={() => supabase.client.auth.signInWithOAuth({ provider: 'google' }).finally(() => supabaseQueryClient.invalidateQueries({ queryKey: [supabase]}))}
					className="min-w-max">
					Sign in with Google
				</button>
			)}
		</div>
	)
}
