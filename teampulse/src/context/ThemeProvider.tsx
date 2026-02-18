import { useState, useCallback, type ReactNode } from 'react'
import { ThemeContext } from './ThemeContext'

type Theme = 'light' | 'dark'

interface ThemeProviderProps {
    children: ReactNode
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState<Theme>('light')

    const toggleTheme = useCallback(() => {
        setTheme((prevTheme: Theme) => prevTheme === 'light' ? 'dark' : 'light')
    }, [])

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}




