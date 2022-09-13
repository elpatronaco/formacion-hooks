import './header.css'

export default function Header() {
	return (
		<header className="header flex justify-space-between">
			<h1>TODO</h1>
			<button className="btn">
				{true ? '🌙' : '☀️'}
			</button>
		</header>
	)
}
