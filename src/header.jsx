import './header.css'
import { useTheme } from './theme-context'

export default function Header() {
	const { isLight, dispatch } = useTheme()

	const handleToggle = () => {
		dispatch({ type: 'toggle' })
	}

	return (
		<header className="header flex justify-space-between">
			<h1>TODO</h1>
			<button className="btn" onClick={handleToggle}>
				{isLight ? '🌙' : '☀️'}
			</button>
		</header>
	)
}
