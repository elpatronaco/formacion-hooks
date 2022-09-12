import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './app'
import './main.css'
import { ThemeProvider } from './theme-context'

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<ThemeProvider>
			<App />
		</ThemeProvider>
	</React.StrictMode>
)
