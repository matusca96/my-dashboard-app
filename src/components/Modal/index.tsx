import { Cross2Icon } from '@radix-ui/react-icons'
import { ComponentProps } from '@stitches/react'

import useTheme from '../../hooks/useTheme'

import { IconButton } from '../IconButton'

import {
  StyledClose,
  StyledContent,
  StyledDescription,
  StyledOverlay,
  StyledPortal,
  StyledRoot,
  StyledTitle
} from './styles'
import { darkTheme } from '../../styles/stitches.config'

interface Props extends ComponentProps<typeof StyledContent> {
  title: string
  description: string
  open: boolean
  onClose: () => void
  children: React.ReactNode
}

export const Modal = ({
  open,
  onClose,
  title,
  description,
  children,
  ...rest
}: Props): JSX.Element => {
  const { theme } = useTheme()

  return (
    <StyledRoot open={open} onOpenChange={onClose}>
      <StyledPortal>
        <StyledOverlay />
        <StyledContent
          className={theme === 'dark' ? darkTheme : 'light'}
          {...rest}
        >
          <StyledTitle>{title}</StyledTitle>
          <StyledDescription>{description}</StyledDescription>
          {children}
          <StyledClose asChild>
            <IconButton
              css={{ position: 'absolute', top: 10, right: 10 }}
              variant="ghost"
              icon={<Cross2Icon />}
            />
          </StyledClose>
        </StyledContent>
      </StyledPortal>
    </StyledRoot>
  )
}
