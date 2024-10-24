import Header from './header'
import Search from './search'
import PostThumb from '@/components/postThumb'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'

export default function App() {
	return (
		<div className='flex flex-col min-h-full gap-2'>
			<Header />
			<main className="flex flex-col flex-grow gap-2">
				<button className="flex min-w-full gap-2 justify-center items-center">
					<div>Play</div>
					<FontAwesomeIcon icon={faPlay} />
				</button>
				<Search />
				<section>
					<PostThumb />
				</section>
			</main>
			<footer className="grid grid-cols-3">
				<div>Quips</div>
				<div>Contact</div>
			</footer>
		</div>
	)
}
