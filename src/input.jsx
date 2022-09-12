import { forwardRef } from 'react'
import './input.css'

const Input = forwardRef(({ value, onChange, ...props }, ref) => {
	return (
		<input
			{...props}
			className="input"
			type="text"
			onChange={(e) => onChange(e.target.value)}
			ref={ref}
		/>
	)
})

export default Input
