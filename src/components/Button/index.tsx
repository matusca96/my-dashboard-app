import { ComponentProps } from '@stitches/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'
import { Button as StyledButton, LoadingSpinner } from './styles'

interface Props extends ComponentProps<typeof StyledButton> {
  leftIcon?: React.ReactNode
  isLoading?: boolean
  children: React.ReactNode
}

const BaseButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { leftIcon, isLoading, children, ...rest },
  ref
): JSX.Element => {
  return (
    <StyledButton ref={ref} disabled={isLoading} {...rest}>
      {leftIcon}
      {isLoading ? <LoadingSpinner /> : children}
    </StyledButton>
  )
}

export const Button = forwardRef(BaseButton)
