import { Routes as Router, Route } from 'react-router-dom'

import { AddUser } from '../pages/AddUser'
import { Dashboard } from '../pages/Dashboard'
import { EditUser } from '../pages/EditUser'

import { Flex, Text } from '../components/Primitives'

export const Routes = (): JSX.Element => {
  return (
    <Router>
      <Route path="/" element={<Dashboard />} />
      <Route path="add" element={<AddUser />} />
      <Route path="edit/:id" element={<EditUser />} />
      <Route
        path="*"
        element={
          <Flex
            css={{
              width: '100%',
              height: '100vh',

              gap: '$2',

              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',

              bg: 'slate1'
            }}
          >
            <Text css={{ fontSize: '$6' }}>💀</Text>
            <Text
              css={{ fontSize: '$4', fontWeight: '$bold', color: '$slate12' }}
            >
              Oh-oh!
            </Text>
            <Text css={{ color: '$slate12' }}>
              {
                "I think you're not supposed to find me! Please, try another location."
              }
            </Text>
          </Flex>
        }
      />
    </Router>
  )
}
