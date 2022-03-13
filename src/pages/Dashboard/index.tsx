import { useEffect, useState } from 'react'
import { Pencil1Icon, PlusIcon, TrashIcon } from '@radix-ui/react-icons'
import { useNavigate } from 'react-router-dom'

import { useAppDispatch, useAppSelector } from '../../config/redux/store'
import { checkFirstTimeLoaded, saveUsers } from '../../slices/dashboardSlice'

import * as api from '../../services/api'

import { Flex, Separator, Text } from '../../components/Primitives'
import { Header } from '../../components/Header'
import { Button } from '../../components/Button'
import { ScrollArea } from '../../components/ScrollArea'
import { IconButton } from '../../components/IconButton'
import { Spinner } from '../../components/Spinner'
import { Modal } from '../../components/Modal'

import { Table, Tbody, Td, TdNoResults, Th, Thead, Tr } from './styles'

export const Dashboard = (): JSX.Element => {
  const [isLoading, setIsLoading] = useState(false)
  const [selectedUser, setSelectedUser] = useState<Dashboard.User | undefined>(
    undefined
  )

  const navigate = useNavigate()
  const dispatch = useAppDispatch()
  const { users, firstTimeLoaded } = useAppSelector((state) => state)

  const handleOnDeleteUser = async (): Promise<void> => {
    if (!selectedUser) return

    try {
      await api.deleteMethod(selectedUser.id)

      const updatedUsers = users.filter((user) => user.id !== selectedUser.id)

      dispatch(saveUsers(updatedUsers))
      setSelectedUser(undefined)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    const loadUsers = async (): Promise<void> => {
      if (firstTimeLoaded) return

      try {
        setIsLoading(true)

        const response = await api.get<Dashboard.User[]>()

        dispatch(saveUsers(response))
        dispatch(checkFirstTimeLoaded(true))
      } catch (err) {
        console.log(err)
      } finally {
        setIsLoading(false)
      }
    }

    loadUsers()
  }, [dispatch, users])

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

        <Flex
          css={{
            borderRadius: '$2',
            mt: '$3',

            alignItems: 'center',
            justifyContent: 'center',

            width: '100%',
            flex: 1,
            overflow: 'hidden'
          }}
        >
          {isLoading ? (
            <Spinner />
          ) : (
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
                  {users.length <= 0 ? (
                    <Tr>
                      <TdNoResults colSpan={7}>
                        No users were found. 😢
                      </TdNoResults>
                    </Tr>
                  ) : (
                    users.map((user) => (
                      <Tr key={user.id}>
                        <Td>{user.id}</Td>
                        <Td>{user.name}</Td>
                        <Td>{user.username}</Td>
                        <Td>{user.address.city}</Td>
                        <Td>{user.email.toLowerCase()}</Td>
                        <Td>
                          <IconButton
                            color="teal"
                            variant="ghost"
                            icon={<Pencil1Icon />}
                            onClick={() => navigate(`/edit/${user.id}`)}
                          />
                        </Td>
                        <Td>
                          <IconButton
                            color="red"
                            variant="ghost"
                            icon={<TrashIcon />}
                            onClick={() => setSelectedUser(user)}
                          />
                        </Td>
                      </Tr>
                    ))
                  )}
                </Tbody>
              </Table>
            </ScrollArea>
          )}
        </Flex>
      </Flex>

      <Modal
        open={!!selectedUser}
        title="Warning!"
        description={`Do you really want to delete the user '${
          selectedUser?.name ?? ''
        }'?`}
        onClose={() => setSelectedUser(undefined)}
      >
        <Flex css={{ ml: 'auto', gap: '$2', width: '180px' }}>
          <Button
            css={{ flex: 1 }}
            color="main"
            onClick={() => setSelectedUser(undefined)}
          >
            Cancel
          </Button>
          <Button
            css={{ flex: 1 }}
            color="warning"
            onClick={handleOnDeleteUser}
          >
            Delete
          </Button>
        </Flex>
      </Modal>
    </Flex>
  )
}
