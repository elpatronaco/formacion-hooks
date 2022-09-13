import { createContext } from 'react'

export const THEMES = Object.freeze({
	LIGHT: 'light',
	DARK: 'dark',
})

const ThemeContext = createContext({
	theme: THEMES.DARK,
	isLight: false,
	dispatch: () => {},
})

export function ThemeProvider({ children }) {
	return (
		<ThemeContext.Provider
			value={{ state: THEMES.DARK, isLight: false, dispatch: () => {} }}
		>
			{children}
		</ThemeContext.Provider>
	)
}
