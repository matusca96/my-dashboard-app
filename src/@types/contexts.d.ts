declare namespace ThemeContext {
  type Data = {
    theme: ThemeType
    toggleTheme: () => void
  }

  type ThemeType = 'light' | 'dark'

  type Props = {
    children: import('react').ReactNode
  }
}

declare namespace ToastContext {
  type Data = {
    toast: (options: Options) => void
  }

  type Options = {
    title: string
    description: string
    duration?: number
    status: 'success' | 'error'
  }

  type Props = {
    children: import('react').ReactNode
  }
}
