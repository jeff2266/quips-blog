import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Link from 'next/link'

export default function Header() {

	return (
		<header className="flex justify-between items-center">
			<h1 className="text-2xl font-bold">Quips</h1>
			<Link href="/auth" className='p-0.5'>
				<FontAwesomeIcon icon={faUser} />
			</Link>
		</header>
	)
}
