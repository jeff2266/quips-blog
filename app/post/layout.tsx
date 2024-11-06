'use client'

import dynamic from 'next/dynamic'

const Protected = dynamic(() => import('@/lib/components/protected'), { ssr: false })

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
	return <Protected>{children}</Protected>
}
