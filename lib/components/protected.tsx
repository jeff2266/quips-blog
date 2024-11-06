'use client'

import { useLayoutEffect } from "react"
import { useSuspenseQuery } from "@tanstack/react-query"
import { supabaseGroupOptions } from "./supabaseQueryProvider"
import { useRouter } from "next/navigation"

export default function Protected({ children }: Readonly<{ children: React.ReactNode }>) {
	const {
		data: {
			data: { session }
		}
	} = useSuspenseQuery(supabaseGroupOptions('session'))
    const router = useRouter()

    useLayoutEffect(() => {
        if (!session)
            router.push('/profile')
    }, [session])
    
    return <>{session ? children : null}</>
}