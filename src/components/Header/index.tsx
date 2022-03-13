import { SunIcon, MoonIcon } from '@radix-ui/react-icons'

import useTheme from '../../hooks/useTheme'

import { IconButton } from '../IconButton'

import { Container, Title } from './styles'

export const Header = (): JSX.Element => {
  const { theme, toggleTheme } = useTheme()

  return (
    <Container>
      <Title>MyDashboard</Title>
      <IconButton
        icon={theme === 'dark' ? <MoonIcon /> : <SunIcon />}
        onClick={toggleTheme}
      />
    </Container>
  )
}
