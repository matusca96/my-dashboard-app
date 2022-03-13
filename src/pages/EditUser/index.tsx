import { useParams } from 'react-router-dom'

import { Form } from '../../components/Form'
import { Header } from '../../components/Header'
import { Box, Flex, Separator, Text } from '../../components/Primitives'

export const EditUser = (): JSX.Element => {
  const params = useParams()

  console.log(params)

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
          my: 'auto',
          p: '$3',
          flexDirection: 'column',
          alignItems: 'center',

          borderRadius: '$2',
          bg: '$slate2',

          transition: '$fast'
        }}
      >
        <Flex css={{ width: '100%', py: '$3', alignItems: 'center' }}>
          <Text css={{ fontWeight: '$bold', fontSize: '$5', flex: 1 }}>
            Edit user
          </Text>
        </Flex>

        <Separator css={{ m: '$2' }} />

        <Box
          css={{
            mt: '$3',
            pb: '$1',
            width: '100%',

            '@bp2': {
              maxWidth: '70%',
              mx: 'auto'
            }
          }}
        >
          <Form />
        </Box>
      </Flex>
    </Flex>
  )
}
