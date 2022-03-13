import { useNavigate } from 'react-router-dom'

import { Button } from '../Button'
import { Input } from '../Input'
import { Flex } from '../Primitives'

export const Form = (): JSX.Element => {
  const navigate = useNavigate()

  return (
    <Flex css={{ flexDirection: 'column', gap: '$3' }}>
      <Input label="Name:" />
      <Input label="Email:" />

      <Flex
        css={{
          mt: '$3',
          gap: '$2',
          width: '200px',
          alignSelf: 'flex-end',
          justifyContent: 'flex-end'
        }}
      >
        <Button color="warning" css={{ flex: 1 }} onClick={() => navigate(-1)}>
          Cancel
        </Button>
        <Button color="success" css={{ flex: 1 }}>
          Save
        </Button>
      </Flex>
    </Flex>
  )
}
