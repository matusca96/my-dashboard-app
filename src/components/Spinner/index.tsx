import { Flex } from '../Primitives'

import { Spinner as BaseSpinner } from './styles'

export const Spinner = (): JSX.Element => {
  return (
    <Flex css={{ width: 50, height: 50 }}>
      <BaseSpinner />
    </Flex>
  )
}
