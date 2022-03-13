import { styled } from '../../styles/stitches.config'

export const Input = styled('input', {
  appearance: 'none',
  bg: '$slate5',

  border: '2px solid $slate5',
  borderRadius: '$2',

  fontSize: '$2',
  color: '$slate12',

  p: '$2',
  outline: 'none',

  transition: '$fastInput',

  '&:hover': {
    bg: '$slate6'
  },

  '&:active': {
    bg: '$slate7'
  },

  '&:focus-visible': {
    border: '2px solid $slate10'
  }
})
