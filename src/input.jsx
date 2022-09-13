import { forwardRef } from 'react'
import './input.css'

const Input = forwardRef(({ value, ...props }, ref) => {
	return (
		<input
			{...props}
			className="input"
			type="text"
			ref={ref}
		/>
	)
})

export default Input
