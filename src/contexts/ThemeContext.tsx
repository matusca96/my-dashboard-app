import { createContext, useEffect, useState } from 'react'
import { Box } from '../components/Primitives'
import { darkTheme } from '../styles/stitches.config'
import { getFromStorage, saveOnStorage } from '../utils/storage'

export const ThemeContext = createContext({} as ThemeContext.Data)

export const ThemeProvider = ({
  children
}: ThemeContext.Props): JSX.Element => {
  const [theme, setTheme] = useState<ThemeContext.ThemeType>('dark')

  const toggleTheme = (): void => {
    setTheme((prevState) => (prevState === 'light' ? 'dark' : 'light'))
    saveOnStorage<string>(
      '@my-dashboard-app/theme',
      theme === 'dark' ? 'light' : 'dark'
    )
  }

  useEffect(() => {
    const storageTheme = getFromStorage<ThemeContext.ThemeType>(
      '@my-dashboard-app/theme'
    )

    const mq = window.matchMedia('(prefers-color-scheme: dark)')

    if (storageTheme) {
      setTheme(storageTheme)
    } else {
      setTheme(mq.matches ? 'dark' : 'light')
    }

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
      <Box
        css={{ height: '100vh' }}
        className={theme === 'dark' ? darkTheme : 'light'}
      >
        {children}
      </Box>
    </ThemeContext.Provider>
  )
}
