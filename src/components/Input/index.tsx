import { ComponentProps } from '@stitches/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Flex, Text } from '../Primitives'

import { Input as StyledInput } from './styles'

interface Props extends ComponentProps<typeof StyledInput> {
  label?: string
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, ...rest },
  ref
): JSX.Element => {
  return (
    <Flex css={{ flexDirection: 'column' }}>
      {!!label && (
        <Text css={{ color: '$slate11', fontWeight: '$medium', mb: '5px' }}>
          {label}
        </Text>
      )}
      <StyledInput ref={ref} {...rest} />
    </Flex>
  )
}

export const Input = forwardRef(InputBase)
