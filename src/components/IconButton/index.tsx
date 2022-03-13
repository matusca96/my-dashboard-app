import { ComponentProps } from '@stitches/react'

import { Button } from './styles'

interface Props extends ComponentProps<typeof Button> {
  icon: React.ReactNode
}

export const IconButton = ({ icon, ...rest }: Props): JSX.Element => {
  return <Button {...rest}>{icon}</Button>
}
