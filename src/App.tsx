import { ThemeProvider } from './contexts/ThemeProvider'

import { globalStyles, styled } from './styles/stitches.config'

const Box = styled('div', {
  backgroundColor: '$indigo2',
  color: '$slate12',
  height: '100vh'
})

export const App = (): JSX.Element => {
  globalStyles()

  return (
    <ThemeProvider>
      <Box>My Dashboard App</Box>
    </ThemeProvider>
  )
}
