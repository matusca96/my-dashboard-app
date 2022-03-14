import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  p: '10px',
  borderRadius: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '$2',

  border: 0,

  cursor: 'pointer',

  '&:disabled': {
    opacity: '0.6',

    cursor: 'not-allowed'
  },

  variants: {
    color: {
      main: {
        bg: '$slate4',
        color: '$slate12',

        '&:hover': {
          bg: '$slate5'
        },
        '&:active': {
          bg: '$slate6'
        }
      },

      warning: {
        bg: '$red5',
        color: '$slate12',

        '&:hover': {
          bg: '$red6'
        },
        '&:active': {
          bg: '$red7'
        }
      },

      success: {
        bg: '$green5',
        color: '$slate12',

        '&:hover': {
          bg: '$green6'
        },
        '&:active': {
          bg: '$green7'
        }
      }
    }
  },

  defaultVariants: {
    color: 'main'
  }
})

const spin = keyframes({
  to: { transform: 'rotate(1turn)' }
})

export const LoadingSpinner = styled('div', {
  flex: 1,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: '$fast',

  '&::after': {
    content: '',
    position: 'absolute',
    width: 14,
    height: 14,
    border: '2px solid transparent',
    borderTopColor: '$slate12',
    borderRadius: '50%',
    animation: `${String(spin)} .75s linear infinite`
  }
})
