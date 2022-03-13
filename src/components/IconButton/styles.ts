import { styled } from '../../styles/stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  p: '10px',
  borderRadius: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$slate12',

  transition: '$fast',
  cursor: 'pointer',

  variants: {
    variant: {
      ghost: {
        border: '2px solid transparent',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$slate3'
        },
        '&:active': {
          backgroundColor: '$slate4'
        },
        '&:focus': {
          border: '2px solid $slate8'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'ghost'
  }
})
