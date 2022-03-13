import { useContext } from 'react'
import { ThemeContext } from '../contexts/ThemeContext'

const useTheme = (): ThemeContext.Data => {
  const context = useContext(ThemeContext)

  if (context === undefined || Object.keys(context).length === 0) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }

  return context
}

export default useTheme
