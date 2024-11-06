'use client'

import { QueryClient, QueryClientProvider, queryOptions } from '@tanstack/react-query'
import { SupabaseQueryGroupKey } from '@/lib/definitions/supabase'
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '')
const client = new QueryClient({})

export function supabaseGroupOptions(supabaseQueryKey: SupabaseQueryGroupKey) {
	return queryOptions({
		queryKey: [supabaseQueryKey],
		queryFn: ({ queryKey }) => {
			const queryKeyObject = queryKey.at(0)
			if (!queryKeyObject) throw new Error('Supabase client not found')
			switch (queryKeyObject) {
				case 'session':
					return supabase.auth.getSession()
				default:
					throw new Error(`Invalid query key: ${queryKeyObject}`)
			}
		}
	})
}

export function signInWithOAuthGoogle() {
	return supabase.auth.signInWithOAuth({ provider: 'google' })
}

export function signOut() {
	return supabase.auth.signOut()
}

export default function SupabaseQueryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
