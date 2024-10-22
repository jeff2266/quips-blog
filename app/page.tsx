import QuipsNhostProvider from '@/components/quipsNhostProvider'
import Header from './header'

export default function App() {

	return (
		<div className="flex flex-col">
			<QuipsNhostProvider>
				<Header />
			</QuipsNhostProvider>
			<main className="flex-grow">main</main>
			<footer className="min-h-max grid grid-cols-3">
				<div>
					Quips
				</div>
				<div>Contact</div>
			</footer>
		</div>
	)
}