'use client'

import { useNhostClient } from '@nhost/nextjs'
import { useCallback, useEffect, useState } from 'react'

const qGetPrompts = `
    query {
        prompt {
            id
            prompt
            user {
                displayName
            }
            created
        }
    }
`

export default function PostThumb() {
	const nhostClient = useNhostClient()
	const [prompts, setPrompts] = useState<any>(null)
	const getPromptsCallback = useCallback<() => Promise<void>>(async () => {
		const data = await nhostClient.graphql.request(qGetPrompts)
        console.log(data)
		setPrompts(data)
	}, [])

	useEffect(() => {
		getPromptsCallback().catch(e => console.error(e))
	}, [getPromptsCallback])

	return (
		<div className="border">
			{prompts?.data?.prompt?.map((p: any) => (
				<div key={p?.id}>
					<h3 className="text-lg">{p?.prompt}</h3>
					<div className="flex">
						<div className="text-xs">Likes</div>
						<div className="text-xs">{p?.user?.displayName}</div>
						<div className="text-xs">{p?.created}</div>
					</div>
				</div>
			))}
		</div>
	)
}
