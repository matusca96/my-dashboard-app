import * as ToastPrimitive from '@radix-ui/react-toast'
import { keyframes } from '@stitches/react'

import { styled } from '../../styles/stitches.config'

const VIEWPORT_PADDING = 25

const hide = keyframes({
  '0%': { opacity: 1 },
  '100%': { opacity: 0 }
})

const slideIn = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: 'translateX(0)' }
})

const swipeOut = keyframes({
  from: { transform: 'translateX(var(--radix-toast-swipe-end-x))' },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
})

export const StyledViewport = styled(ToastPrimitive.Viewport, {
  position: 'fixed',
  top: 0,
  right: 0,
  display: 'flex',
  flexDirection: 'column',
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: '100vw',
  margin: 0,
  listStyle: 'none',
  zIndex: 2147483647
})

export const StyledToast = styled(ToastPrimitive.Root, {
  borderRadius: '$3',
  boxShadow:
    'hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px',
  padding: 15,
  display: 'grid',
  gridTemplateAreas: '"title action" "description action"',
  gridTemplateColumns: 'auto max-content',
  columnGap: 15,
  alignItems: 'center',

  variants: {
    status: {
      success: {
        bg: '$green6'
      },
      error: {
        bg: '$red6'
      }
    }
  },

  '@media (prefers-reduced-motion: no-preference)': {
    '&[data-state="open"]': {
      animation: `${String(slideIn)} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${String(hide)} 100ms ease-in forwards`
    },
    '&[data-swipe="move"]': {
      transform: 'translateX(var(--radix-toast-swipe-move-x))'
    },
    '&[data-swipe="cancel"]': {
      transform: 'translateX(0)',
      transition: 'transform 200ms ease-out'
    },
    '&[data-swipe="end"]': {
      animation: `${String(swipeOut)} 100ms ease-out forwards`
    }
  }
})

export const StyledTitle = styled(ToastPrimitive.Title, {
  gridArea: 'title',
  marginBottom: '$2',

  fontWeight: '$bold',
  color: '$slate12',
  fontSize: '$2'
})

export const StyledDescription = styled(ToastPrimitive.Description, {
  gridArea: 'description',
  margin: 0,

  color: '$slate12',
  fontSize: '$1'
})

export const StyledAction = styled(ToastPrimitive.Action, {
  gridArea: 'action'
})

export const Button = styled('button', {
  appearance: 'none',

  bg: 'transparent',

  border: '1px solid $slate11',
  borderRadius: '$2',

  py: '$2',
  px: '$3',

  color: '$slate12',

  cursor: 'pointer',

  variants: {
    color: {
      success: {
        '&:hover': {
          bg: '$green8'
        },

        '&:active': {
          bg: '$green9'
        }
      },
      error: {
        '&:hover': {
          bg: '$red7'
        },

        '&:active': {
          bg: '$red8'
        }
      }
    }
  }
})

export const ToastProvider = ToastPrimitive.Provider
export const ToastViewport = StyledViewport
export const Toast = StyledToast
export const ToastTitle = StyledTitle
export const ToastDescription = StyledDescription
export const ToastAction = StyledAction
export const ToastClose = ToastPrimitive.Close
