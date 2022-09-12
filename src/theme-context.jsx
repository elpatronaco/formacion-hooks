import { createContext, useContext, useState } from 'react'

export const THEMES = Object.freeze({
	LIGHT: 'light',
	DARK: 'dark',
})

const ThemeContext = createContext({
	theme: THEMES.DARK,
	isLight: false,
	toggleTheme: () => {},
})

export function useTheme() {
	return useContext(ThemeContext)
}

export function ThemeProvider({ children }) {
	const [theme, setTheme] = useState(THEMES.DARK)

	const toggleTheme = () => {
		setTheme((theme) =>
			theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT
		)
	}

	return (
		<ThemeContext.Provider
			value={{ theme, isLight: theme === THEMES.LIGHT, toggleTheme }}
		>
			{children}
		</ThemeContext.Provider>
	)
}
