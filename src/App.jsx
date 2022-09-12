import { useState } from 'react'
import './App.css'

function App() {
	const [todos, setTodos] = useState([]) // { value: string, completed: boolean }[]
	const [inpValue, setInpValue] = useState('')

	const handleAddTodo = () => {
		setTodos((todos) => [...todos, { value: inpValue, completed: false }])
		setInpValue('')
		console.log('click')
	}

	return (
		<div className="app flex justify-center">
			<div className="container flex column">
				<header className="header flex justify-space-between">
					<h1>TODO</h1>
				</header>
				<main className="flex column">
					<div className="card input-card">
						<div className="btn-container flex justify-center">
							<button className="btn" onClick={handleAddTodo}>
								+
							</button>
						</div>
					</div>
					<div className="card shadow">hola</div>
				</main>
			</div>
		</div>
	)
}

export default App
