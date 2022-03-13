import { keyframes } from '@stitches/react'
import { slate, blackA } from '@radix-ui/colors'
import * as DialogPrimitive from '@radix-ui/react-dialog'

import { styled } from '../../styles/stitches.config'

const overlayShow = keyframes({
  '0%': { opacity: 0 },
  '100%': { opacity: 1 }
})

const contentShow = keyframes({
  '0%': { opacity: 0, transform: 'translate(-50%, -48%) scale(.96)' },
  '100%': { opacity: 1, transform: 'translate(-50%, -50%) scale(1)' }
})

export const StyledOverlay = styled(DialogPrimitive.Overlay, {
  bg: blackA.blackA9,
  position: 'fixed',
  inset: 0,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${String(
      overlayShow
    )} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
  }
})

export const StyledPortal = styled(DialogPrimitive.Portal)

export const StyledContent = styled(DialogPrimitive.Content, {
  bg: '$slate2',
  borderRadius: '$3',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '90vw',
  maxWidth: '450px',
  maxHeight: '85vh',
  padding: 25,
  '@media (prefers-reduced-motion: no-preference)': {
    animation: `${String(
      contentShow
    )} 150ms cubic-bezier(0.16, 1, 0.3, 1) forwards`
  },
  '&:focus': { outline: 'none' }
})

export const StyledTitle = styled(DialogPrimitive.Title, {
  margin: 0,

  fontWeight: '$bold',
  fontFamily: '$inter',
  fontSize: '18px',

  color: '$slate12'
})

export const StyledDescription = styled(DialogPrimitive.Description, {
  margin: '10px 0 20px',
  fontSize: '$2',
  fontFamily: '$inter',

  color: '$slate11',
  lineHeight: 1.5
})

export const StyledRoot = DialogPrimitive.Root
export const StyledTrigger = DialogPrimitive.Trigger
export const StyledClose = DialogPrimitive.Close
