import './item.css'

export default function Item({ value, completed, onToggle }) {
	return (
		<div className={`flex item-container ${completed ? 'checked' : ''}`}>
			<span className="check-container">
				<input
					type="checkbox"
					className="checkbox full"
					checked={completed}
					onChange={onToggle}
				/>
			</span>
			<p>{value}</p>
		</div>
	)
}
