'use client'

import { NhostProvider } from '@nhost/nextjs'
import { useStore } from '@/lib/store'

export default function QuipsNhostProvider({ children }: Readonly<{ children?: React.ReactNode }>) {
	const nhost = useStore(state => state.nhost)

	return <NhostProvider nhost={nhost}>{children}</NhostProvider>
}