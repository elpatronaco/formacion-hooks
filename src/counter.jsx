import { useEffect, useState } from 'react'
import './counter.css'

export default function Counter() {
	const [count, setCount] = useState(0)

	useEffect(() => {
		const interval = setInterval(() => {
			setCount((count) => count + 1)
		}, 1000)

		return () => clearInterval(interval)
	}, [])

	return (
		<div className="flex counter-container">
			<span>
				Llevas <b>{count} segundos</b> en la app
			</span>
		</div>
	)
}
