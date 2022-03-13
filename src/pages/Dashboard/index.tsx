import { PlusIcon } from '@radix-ui/react-icons'

import useTheme from '../../hooks/useTheme'

import { Flex, Separator, Text } from '../../components/Primitives'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'

export const Dashboard = (): JSX.Element => {
  const { theme } = useTheme()

  return (
    <Flex
      css={{
        flex: 1,
        flexDirection: 'column',
        maxWidth: '1200px',
        mx: 'auto',
        px: '$4',
        pb: '$4'
      }}
    >
      <Header />

      <Flex
        css={{
          mt: '$3',
          flex: 1,

          flexDirection: 'column',
          alignItems: 'center',

          p: '$3',

          borderRadius: '$2',
          bg: '$slate2',

          transition: '$fast'
        }}
      >
        <Flex css={{ width: '100%', p: '$3', alignItems: 'center' }}>
          <Text css={{ fontWeight: '$bold', fontSize: '$5', flex: 1 }}>
            Users
          </Text>
          <Button leftIcon={<PlusIcon />}>New user</Button>
        </Flex>

        <Separator css={{ m: '$2' }} />
      </Flex>
    </Flex>
  )
}
