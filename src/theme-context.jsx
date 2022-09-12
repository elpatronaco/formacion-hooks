import { createContext, useContext, useReducer } from 'react'

export const THEMES = Object.freeze({
	LIGHT: 'light',
	DARK: 'dark',
})

const ThemeContext = createContext({
	theme: THEMES.DARK,
	isLight: false,
	dispatch: () => {},
})

export function useTheme() {
	return useContext(ThemeContext)
}

function reducer(state, action) {
	switch (action.type) {
		case 'toggle':
			return {
				...state,
				theme:
					state.theme === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT,
			}
		default:
			return state
	}
}

const initialState = { theme: THEMES.DARK }

export function ThemeProvider({ children }) {
	const [state, dispatch] = useReducer(reducer, initialState)

	return (
		<ThemeContext.Provider
			value={{ state, isLight: state.theme === THEMES.LIGHT, dispatch }}
		>
			{children}
		</ThemeContext.Provider>
	)
}
