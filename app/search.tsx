'use client'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faFilter, faClose } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react'
import * as Collapsible from '@radix-ui/react-collapsible'

export default function Search() {
	const [filterOpen, setFilterOpen] = useState(false)

	return (
		<Collapsible.Root open={filterOpen} onOpenChange={setFilterOpen}>
			<div className="flex min-w-full gap-2 items-center">
				<input type="text" placeholder="Search" className="flex-grow px-2" />
				<Collapsible.Trigger asChild>
					<button className="w-6 aspect-square">
						<FontAwesomeIcon icon={filterOpen ? faClose : faFilter} />
					</button>
				</Collapsible.Trigger>
				<button className="w-6 aspect-square">
					<FontAwesomeIcon icon={faSearch} />
				</button>
			</div>
			<Collapsible.Content className="p-2">
				<div>Filter</div>
				<div>Sort</div>
			</Collapsible.Content>
		</Collapsible.Root>
	)
}
