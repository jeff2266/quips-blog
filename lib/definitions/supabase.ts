import { AuthError, Session, SupabaseClient } from '@supabase/supabase-js'

export type SupabaseQueryGroupKeyEnum = 'session'

export type SupabaseQueryGroupKey = {
	client: SupabaseClient,
	key: string
}

export type ResolveSession = Promise<
	| { data: { session: Session }; error: null }
	| { data: { session: null }; error: AuthError }
	| { data: { session: null }; error: null }
>

export type ResolveSignOut = Promise<{
	error: AuthError | null
}>
