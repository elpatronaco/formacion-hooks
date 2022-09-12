import './header.css'
import { useTheme } from './theme-context'

export default function Header() {
    const { isLight, toggleTheme } = useTheme()

	return (
		<header className="header flex justify-space-between">
			<h1>TODO</h1>
            <button className="btn" onClick={toggleTheme}>
                {isLight ? '🌙' : '☀️'}
            </button>
		</header>
	)
}
