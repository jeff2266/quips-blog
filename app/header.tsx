'use client'

import { use } from 'react'
import { SupabaseContext } from '@/lib/components/supabaseProvider'
import dynamic from 'next/dynamic'

const AvatarContainer = dynamic(() => import('@/lib/components/avatarContainer'), { ssr: false })

export default function Header() {
	const supabase = use(SupabaseContext)

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-2xl font-bold p-2 sm:p-4">Quips</h1>
			<AvatarContainer resolveSession={supabase.auth.getSession()} />
		</header>
	)
}
