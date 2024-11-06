'use client'

import { QueryClient, QueryClientProvider, queryOptions } from '@tanstack/react-query'
import { SupabaseQueryGroupKey } from '@/lib/definitions/supabase'

const client = new QueryClient({})

export function supabaseGroupOptions(supabaseQueryKey: SupabaseQueryGroupKey) {
	return queryOptions({
		queryKey: [supabaseQueryKey],
		queryFn: ({ queryKey }) => {
			const queryKeyObject = queryKey.at(0)
			if (!queryKeyObject) throw new Error('Supabase client not found')
			const { client, key } = queryKeyObject
			switch (key) {
				case 'session':
					return client.auth.getSession()
				default:
					throw new Error(`Invalid query key: ${key}`)
			}
		}
	})
}

export default function ReactQueryProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	return <QueryClientProvider client={client}>{children}</QueryClientProvider>
}
