'use client'

import { SWRConfig, SWRConfiguration } from 'swr'

export default function SWR({ swrConfig, children }: Readonly<{ swrConfig: SWRConfiguration, children: React.ReactNode }>) {
    return <SWRConfig value={swrConfig}>
        {children}
    </SWRConfig>
}