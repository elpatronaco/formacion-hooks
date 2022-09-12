import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import Input from './input'
import Item from './item'
import './app.css'
import { THEMES, useTheme } from './theme-context'

const TYPES = Object.freeze({
	ALL: 'Todos',
	COMPLETED: 'Completados',
	PENDING: 'Pendiente',
})

function useField() {
	const [value, setValue] = useState('')
	const ref = useRef()

	const handleInputChange = (value) => {
		setValue(value)
	}

	const handleReset = () => {
		setValue('')
		ref.current.value = ''
		ref.current?.focus()
	}

	return { value, ref, onChange: handleInputChange, reset: handleReset }
}

function useTodos() {
	const [todos, setTodos] = useState([]) // { value: string, completed: boolean }[]
	const [type, setType] = useState(TYPES.ALL)

	const { reset, ...field } = useField()

	useEffect(() => {
		document.title = todos.length
			? `Tienes ${todos.length} tareas pendientes`
			: 'No tienes tareas pendientes'
	}, [todos])

	const handleAdd = useCallback(() => {
		if (!field.value) return

		setTodos((todos) => [
			...todos,
			{ value: field.value, completed: false },
		])
		reset()
	}, [field.value, setTodos, reset])

	const handleOnInpKeyDown = (e) => {
		if (e.key === 'Enter') {
			handleAdd()
		}
	}

	const handleToggle = useCallback(
		(index) => {
			setTodos((todos) =>
				todos.map((todo, i) =>
					i === index ? { ...todo, completed: !todo.completed } : todo
				)
			)
		},
		[todos]
	)

	const filteredTodos = useMemo(() => {
		switch (type) {
			case TYPES.COMPLETED:
				return todos.filter((todo) => todo.completed)
			case TYPES.PENDING:
				return todos.filter((todo) => !todo.completed)
			default:
				return todos
		}
	}, [todos, type])

	const handleClearAll = () => {
		setTodos([])
	}

	return {
		todos: filteredTodos,
		add: handleAdd,
		toggle: handleToggle,
		clearAll: handleClearAll,
		type,
		setType,
		onInpKeyDown: handleOnInpKeyDown,
		field,
	}
}

export default function App() {
	const { add, todos, onInpKeyDown, toggle, clearAll, type, setType, field } =
		useTodos()
	const { isLight } = useTheme()

	return (
		<div className={`app flex justify-center ${isLight ? 'light' : ''}`}>
			<div className="container flex column">
				<header className="header flex justify-space-between">
					<h1>TODO</h1>
				</header>
				<main className="flex column">
					<div className="card input-card flex">
						<div className="btn-container flex justify-center">
							<button className="btn" onClick={add}>
								+
							</button>
						</div>
						<Input
							{...field}
							onKeyDown={onInpKeyDown}
							placeholder="Crea una nueva tarea..."
						/>
					</div>
					<div className="flex column card shadow">
						{todos.map((todo, i) => (
							<Item
								key={`item-${i}`}
								onToggle={() => toggle(i)}
								{...todo}
							/>
						))}
						<div className="flex justify-space-between info-container">
							<span>{todos.length} tareas</span>
							<ul className="flex filter-list">
								{Object.keys(TYPES).map((typeKey, i) => {
									const value = TYPES[typeKey]

									return (
										<li
											className={
												type === value ? 'active' : ''
											}
											onClick={() => setType(value)}
											key={`filter-item-${typeKey}-${i}`}
										>
											{value}
										</li>
									)
								})}
							</ul>
							<span className="info-clear" onClick={clearAll}>
								Borrar todo
							</span>
						</div>
					</div>
				</main>
			</div>
		</div>
	)
}
