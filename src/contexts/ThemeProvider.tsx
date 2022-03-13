import { createContext, useEffect, useState } from 'react'
import { darkTheme } from '../styles/stitches.config'

export const ThemeContext = createContext({} as ThemeContext.Data)

export const ThemeProvider = ({
  children
}: ThemeContext.Props): JSX.Element => {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  const toggleTheme = (): void => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
  }

  useEffect(() => {
    const mq = window.matchMedia('(prefers-color-scheme: dark)')
    setTheme(mq.matches ? 'dark' : 'light')

    const checkSystemColorMode = (e: MediaQueryListEvent): void => {
      setTheme(e.matches ? 'dark' : 'light')
    }

    mq.addEventListener('change', checkSystemColorMode)

    return () => {
      mq.removeEventListener('change', checkSystemColorMode)
    }
  }, [])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className={theme === 'dark' ? darkTheme : 'light'}>{children}</div>
    </ThemeContext.Provider>
  )
}
