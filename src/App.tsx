import { ThemeProvider } from './contexts/ThemeContext'
import { Routes } from './routes'
import { Flex } from './components/Primitives'

import { globalStyles } from './styles/stitches.config'

export const App = (): JSX.Element => {
  globalStyles()

  return (
    <ThemeProvider>
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
    </ThemeProvider>
  )
}
