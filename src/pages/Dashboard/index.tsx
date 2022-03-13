import { Pencil1Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

import { Box, Flex, Separator, Text } from '../../components/Primitives'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ScrollArea } from '../../components/ScrollArea'
import { IconButton } from '../../components/IconButton'

import { Table, Tbody, Td, Th, Thead, Tr } from './styles'

export const Dashboard = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Flex
      css={{
        flex: 1,
        flexDirection: 'column',
        maxWidth: '1200px',
        mx: 'auto',
        px: '$4',
        pb: '$4',

        overflow: 'hidden'
      }}
    >
      <Header />

      <Flex
        css={{
          mt: '$3',
          flex: 1,

          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',

          overflow: 'hidden',

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
          <Button leftIcon={<PlusIcon />} onClick={() => navigate('/add')}>
            New user
          </Button>
        </Flex>

        <Separator css={{ m: '$2' }} />

        <Box
          css={{
            borderRadius: '$2',
            mt: '$3',

            width: '100%',
            flex: 1,
            overflow: 'hidden'
          }}
        >
          <ScrollArea>
            <Table>
              <Thead>
                <Tr>
                  <Th>Id</Th>
                  <Th>Name</Th>
                  <Th>Username</Th>
                  <Th>City</Th>
                  <Th>Email</Th>
                  <Th />
                  <Th />
                </Tr>
              </Thead>

              <Tbody>
                <Tr>
                  <Td>1</Td>
                  <Td>Matheus</Td>
                  <Td>Matusca</Td>
                  <Td>Itapetininga</Td>
                  <Td>gomesloud@gmail.com</Td>
                  <Td>
                    <IconButton
                      color="teal"
                      variant="ghost"
                      icon={<Pencil1Icon />}
                      onClick={() => navigate('/edit/1')}
                    />
                  </Td>
                  <Td>
                    <IconButton
                      color="red"
                      variant="ghost"
                      icon={<TrashIcon />}
                    />
                  </Td>
                </Tr>
              </Tbody>
            </Table>
          </ScrollArea>
        </Box>
      </Flex>
    </Flex>
  )
}
