'use client'

import { useMutation, useQueryClient, useSuspenseQuery } from '@tanstack/react-query'
import { signInWithOAuthGoogle, signOut, supabaseGroupOptions } from '@/lib/components/supabaseQueryProvider'

export default function SignIn() {
	const supabaseQueryClient = useQueryClient()
	const supabaseQueryMutationSignIn = useMutation({
		mutationFn: signInWithOAuthGoogle,
		onSettled: () => supabaseQueryClient.invalidateQueries({ queryKey: ['session']})
	})
	const supabaseQueryMutationSignOut = useMutation({
		mutationFn: signOut,
		onSettled: () => supabaseQueryClient.invalidateQueries({ queryKey: ['session']})
	})
	const {
		data: {
			data: { session }
		}
	} = useSuspenseQuery(supabaseGroupOptions('session'))

	return (
		<div>
			{session?.user ? (
				<button onClick={() => supabaseQueryMutationSignOut.mutate()}>Sign Out</button>
			) : (
				<button
					onClick={() => supabaseQueryMutationSignIn.mutate()}
					className="min-w-max">
					Sign in with Google
				</button>
			)}
		</div>
	)
}
