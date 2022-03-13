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

  transition: '$fast',
  cursor: 'pointer',

  variants: {
    color: {
      main: {
        bg: '$slate4',
        color: '$slate12',

        fontFamily: '$inter',

        '&:hover': {
          bg: '$slate5'
        },
        '&:active': {
          bg: '$slate6'
        }
      }
    }
  },

  defaultVariants: {
    color: 'main'
  }
})
