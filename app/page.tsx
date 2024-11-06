import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import Header from './header'
import Search from './search'
import PostThumbs from '@/lib/components/postThumbs'

export default function Page() {
	return (
		<div className="flex flex-col min-h-full gap-2">
			<Header />
			<main className="flex flex-col flex-grow gap-2 sm:gap-4">
				<button className="flex gap-2 justify-center items-center p-2">
					<div>Play</div>
					<FontAwesomeIcon icon={faPlay} />
				</button>
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
