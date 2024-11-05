'use client'

import { useEffect, useState } from 'react'

const sequence = ['\\', '|', '/', '-']

export default function SpinLoader({ speed }: { speed: number }) {
	const [index, setIndex] = useState(0)

	useEffect(() => {
        const interval = setInterval(() => setIndex(last => (last + 1) % (sequence.length)), speed)
        return () => clearInterval(interval)
    }, [speed])

	return <>{sequence[index]}</>
}
