'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'

export default function Search() {
	const [fliterOpen, setFilterOpen] = useState(false)

	return (
		<div className='flex min-w-full gap-2 items-center'>
			<input type="text" placeholder="Search" className="after:block after:w-full after:border-b flex-grow" />
			<Collapsible.Root className="CollapsibleRoot" open={fliterOpen} onOpenChange={setFilterOpen}>
				<Collapsible.Trigger asChild>
					<button className='p-0.5'>
						<FontAwesomeIcon icon={faFilter} />
					</button>
				</Collapsible.Trigger>
			</Collapsible.Root>
			<FontAwesomeIcon icon={faSearch} />
		</div>
	)
}
