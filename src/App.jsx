import { useCallback, useRef, useState } from 'react'
import Input from './Input'
import './app.css'

function useField() {
	const [value, setValue] = useState('')
	const ref = useRef()

	const handleInputChange = (value) => {
		setValue(value)
	}

	const handleReset = () => {
		setValue('')
		ref.current?.focus()
	}

	return { value, ref, onChange: handleInputChange, reset: handleReset }
}

function useTodos() {
	const [todos, setTodos] = useState([]) // { value: string, completed: boolean }[]
	const { reset, ...field } = useField()

	const handleAddTodo = () => {
		setTodos((todos) => [...todos, { value: field.value, completed: false }])
		reset()
	}

	const handleRemove = useCallback(
		(index) => {
			setTodos((todos) => todos.filter((_, i) => i !== index))
		},
		[setTodos]
	)

	return { todos, addTodo: handleAddTodo, remove: handleRemove, field }
}

export default function App() {
	const { addTodo, todos, field } = useTodos()

	return (
		<div className="app flex justify-center">
			<div className="container flex column">
				<header className="header flex justify-space-between">
					<h1>TODO</h1>
				</header>
				<main className="flex column">
					<div className="card input-card flex">
						<div className="btn-container flex justify-center">
							<button className="btn" onClick={addTodo}>
								+
							</button>
						</div>
						<Input
							{...field}
							placeholder="Crea una nueva tarea..."
						/>
					</div>
					<div className="card shadow">{todos}</div>
				</main>
			</div>
		</div>
	)
}
