import { styled } from '../../styles/stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  p: '10px',
  borderRadius: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$indigo12',

  transition: '$fast',
  cursor: 'pointer',

  variants: {
    variant: {
      ghost: {
        border: '2px solid transparent',
        backgroundColor: 'transparent',

        '&:hover': {
          backgroundColor: '$indigo3'
        },
        '&:active': {
          backgroundColor: '$indigo4'
        },
        '&:focus': {
          border: '2px solid $indigo8'
        }
      }
    }
  },

  defaultVariants: {
    variant: 'ghost'
  }
})
