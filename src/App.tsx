import { Routes } from './routes'
import { Flex } from './components/Primitives'

import { globalStyles } from './styles/stitches.config'
import { ThemeProvider } from './contexts/ThemeContext'
import { ToastProvider } from './contexts/ToastContext'

export const App = (): JSX.Element => {
  globalStyles()

  return (
    <ThemeProvider>
      <ToastProvider>
        <Flex
          css={{
            width: '100%',
            height: '100%',
            bg: '$slate1',

            transition: '$fast'
          }}
        >
          <Routes />
        </Flex>
      </ToastProvider>
    </ThemeProvider>
  )
}
