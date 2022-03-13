import { ComponentProps } from '@stitches/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { FieldError } from 'react-hook-form'
import { Flex, Text } from '../Primitives'

import { Input as StyledInput } from './styles'

interface Props extends ComponentProps<typeof StyledInput> {
  label?: string
  error?: FieldError
}

const InputBase: ForwardRefRenderFunction<HTMLInputElement, Props> = (
  { label, error, ...rest },
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

      {!!error && (
        <Text css={{ mt: '$2', fontSize: '$2', color: '$red11' }}>
          {error.message}
        </Text>
      )}
    </Flex>
  )
}

export const Input = forwardRef(InputBase)
