import { ComponentProps } from '@stitches/react'
import { Button as BaseButton, LoadingSpinner } from './styles'

interface Props extends ComponentProps<typeof BaseButton> {
  leftIcon?: React.ReactNode
  isLoading?: boolean
  children: string
}

export const Button = ({
  leftIcon,
  isLoading,
  children,
  ...rest
}: Props): JSX.Element => {
  return (
    <BaseButton disabled={isLoading} {...rest}>
      {leftIcon}
      {isLoading ? <LoadingSpinner /> : children}
    </BaseButton>
  )
}
