export default function PostThumb({
	key,
	prompt,
	author,
	created
}: {
	key: string
	prompt: string
	author: string
	created: string
}) {
	return (
		<div className="border p-2" key={key}>
			<h3 className="text-lg">{prompt}</h3>
			<div className="flex justify-between gap-1 sm:gap-2">
				<div className="flex-grow text-xs">Likes</div>
				<div className="text-xs">{author}</div>
				<div className="text-xs">{created}</div>
			</div>
		</div>
	)
}
