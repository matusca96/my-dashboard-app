import { ComponentProps } from '@stitches/react'
import { Button as BaseButton } from './styles'

interface Props extends ComponentProps<typeof BaseButton> {
  leftIcon: React.ReactNode
  children: string
}

export const Button = ({ leftIcon, children, ...rest }: Props): JSX.Element => {
  return (
    <BaseButton {...rest}>
      {leftIcon}
      {children}
    </BaseButton>
  )
}
