import QuipsNhostProvider from '@/components/quipsNhostProvider'
import Header from './header'

export default function App() {

	return (
		<div className="flex flex-col p-2 md:p-8">
			<QuipsNhostProvider>
				<Header />
			</QuipsNhostProvider>
			<main className="flex-grow">
				<div>{'Play >'}</div>
				<div>Search</div>
			</main>
			<footer className="min-h-max grid grid-cols-3">
				<div>
					Quips
				</div>
				<div>Contact</div>
			</footer>
		</div>
	)
}