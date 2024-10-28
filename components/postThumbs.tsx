'use client'

import { useNhostClient } from '@nhost/nextjs'
import { qGetPrompts } from '@/lib/nhost'
import { useCallback, useEffect, useState } from 'react'
import PostThumb from './postThumb'

export default function PostThumbs() {
	const nhostClient = useNhostClient()
	const [prompts, setPrompts] = useState<any>(null)
	const getPromptsCallback = useCallback(async () => {
		setPrompts(await nhostClient.graphql.request(qGetPrompts))
	}, [])

	useEffect(() => {
		getPromptsCallback().catch(e => console.error(e))
	}, [getPromptsCallback])

	return (
		<div className='grid grid-cols-1 gap-1 sm:gap-2'>
			{prompts?.data?.prompt?.map((p: any) => (
				<PostThumb key={p.id} prompt={p.prompt} author={p.user.displayName} created={p.created} />
			))}
		</div>
	)
}
