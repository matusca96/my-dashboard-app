declare namespace ThemeContext {
  type Data = {
    theme: 'light' | 'dark'
    toggleTheme: () => void
  }

  type Props = {
    children: import('react').ReactNode
  }
}
