import { styled } from '../../styles/stitches.config'

export const Button = styled('button', {
  appearance: 'none',
  p: '10px',
  borderRadius: '$3',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  color: '$slate12',

  cursor: 'pointer',

  variants: {
    color: {
      slate: {
        '&:hover': {
          bg: '$slate3'
        },
        '&:active': {
          bg: '$slate4'
        },
        '&:focus': {
          border: '2px solid $slate8'
        }
      },
      red: {
        '&:hover': {
          bg: '$red5'
        },
        '&:active': {
          bg: '$red6'
        },
        '&:focus': {
          border: '2px solid $red7'
        }
      },
      teal: {
        '&:hover': {
          bg: '$teal5'
        },
        '&:active': {
          bg: '$teal6'
        },
        '&:focus': {
          border: '2px solid $teal7'
        }
      }
    },

    variant: {
      filled: {},
      ghost: {
        border: '2px solid transparent',
        bg: 'transparent'
      }
    }
  },

  compoundVariants: [
    {
      color: 'slate',
      variant: 'filled',
      css: {
        bg: '$slate3',
        border: '2px solid $slate3'
      }
    },
    {
      color: 'red',
      variant: 'filled',
      css: {
        bg: '$red5',
        border: '2px solid $red5'
      }
    },
    {
      color: 'teal',
      variant: 'filled',
      css: {
        bg: '$teal5',
        border: '2px solid $teal5'
      }
    }
  ],

  defaultVariants: {
    color: 'slate',
    variant: 'filled'
  }
})
