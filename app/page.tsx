import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay, faPlus } from '@fortawesome/free-solid-svg-icons'
import Header from './header'
import Search from './search'
import PostThumbs from '@/lib/components/postThumbs'
import Link from 'next/link'

export default function Page() {
	return (
		<div className="flex flex-col min-h-full gap-2">
			<Header />
			<main className="flex flex-col flex-grow gap-2 sm:gap-4">
				<button className="flex gap-2 border justify-center items-center p-2">
					<div>Play</div>
					<FontAwesomeIcon icon={faPlay} />
				</button>
				<Link href="/post" className="flex gap-2 border justify-center items-center p-2">
					<div>New Prompt</div>
					<FontAwesomeIcon icon={faPlus} />
				</Link>
				<Search />
				<section>
					<PostThumbs />
				</section>
			</main>
			<footer className="grid grid-cols-3">
				<div>Quips</div>
				<div>Contact</div>
			</footer>
		</div>
	)
}
