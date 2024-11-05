'use client'

import { use } from 'react'
import { SupabaseContext } from '@/lib/components/supabaseProvider'
import dynamic from 'next/dynamic'

const SignIn = dynamic(() => import('./signIn'), { ssr: false })

export default function Page({ children }: Readonly<{ children: React.ReactNode }>) {
	const supabase = use(SupabaseContext)

	return <SignIn resolveSession={supabase.auth.getSession()} />
}
