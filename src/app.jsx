import Header from './header'
import Counter from './counter'
import Input from './input'
import Item from './item'
import './app.css'

const TYPES = Object.freeze({
	ALL: 'Todos',
	COMPLETED: 'Completados',
	PENDING: 'Pendiente',
})

export default function App() {
	return (
		<div className={`app flex justify-center ${false ? 'light' : ''}`}>
			<div className="container flex column">
				<Header />
				<Counter />
				<main className="flex column">
					<div className="flex card input-card shadow">
						<div className="btn-container flex justify-center">
							<button className="btn">+</button>
						</div>
						<Input placeholder="Crea una nueva tarea..." />
					</div>
					<div className="flex column card shadow">
						{[{ value: 'value', completed: true }].map(
							(todo, i) => (
								<Item key={`item-${i}`} {...todo} />
							)
						)}
						<div className="flex justify-space-between info-container">
							<span>1 tareas</span>
							<ul className="flex filter-list">
								{Object.keys(TYPES).map((typeKey, i) => {
									const value = TYPES[typeKey]

									return (
										<li
											className={i === 0 ? 'active' : ''}
											key={`filter-item-${typeKey}-${i}`}
										>
											{value}
										</li>
									)
								})}
							</ul>
							<span className="info-clear">Borrar todo</span>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
