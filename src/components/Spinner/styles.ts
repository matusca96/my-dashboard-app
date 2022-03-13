import { keyframes } from '@stitches/react'
import { styled } from '../../styles/stitches.config'

const spin = keyframes({
  to: { transform: 'rotate(1turn)' }
})

export const Spinner = styled('div', {
  flex: 1,
  display: 'flex',

  transition: '$fast',

  '&::after': {
    content: '',
    width: 40,
    height: 40,
    border: '5px solid $slate6',
    borderTopColor: '$crimson11',
    borderRadius: '50%',
    animation: `${String(spin)} .75s linear infinite`
  }
})
