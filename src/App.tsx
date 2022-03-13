import { ThemeProvider } from './contexts/ThemeContext'
import { Routes } from './routes'
import { Box } from './components/Box'

import { globalStyles } from './styles/stitches.config'

export const App = (): JSX.Element => {
  globalStyles()

  return (
    <ThemeProvider>
      <Box
        css={{
          backgroundColor: '$indigo2',
          height: '100vh',
          transition: '$fast'
        }}
      >
        <Routes />
      </Box>
    </ThemeProvider>
  )
}
