'use client'

import { createClient, SupabaseClient } from '@supabase/supabase-js'
import { createContext } from 'react'

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_PROJECT_URL ?? '', process.env.NEXT_PUBLIC_SUPABASE_KEY ?? '')
export const SupabaseContext = createContext<SupabaseClient>(supabase)

export function SupabaseProvider({ children }: Readonly<{ children: React.ReactNode }>) {
	return <SupabaseContext.Provider value={supabase}>{children}</SupabaseContext.Provider>
}
