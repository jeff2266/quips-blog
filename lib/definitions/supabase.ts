import { AuthError, Session } from '@supabase/supabase-js'

export type ResolveSession = Promise<
	| { data: { session: Session }; error: null }
	| { data: { session: null }; error: AuthError }
	| { data: { session: null }; error: null }
>
