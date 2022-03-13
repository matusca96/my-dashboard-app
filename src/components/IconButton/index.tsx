import { ComponentProps } from '@stitches/react'
import { forwardRef, ForwardRefRenderFunction } from 'react'

import { Button } from './styles'

interface Props extends ComponentProps<typeof Button> {
  icon: React.ReactNode
}

const BaseIconButton: ForwardRefRenderFunction<HTMLButtonElement, Props> = (
  { icon, ...rest },
  ref
): JSX.Element => {
  return (
    <Button ref={ref} {...rest}>
      {icon}
    </Button>
  )
}

export const IconButton = forwardRef(BaseIconButton)
