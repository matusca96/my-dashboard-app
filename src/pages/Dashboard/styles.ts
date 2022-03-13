import { slate, slateDark } from '@radix-ui/colors'
import { styled } from '../../styles/stitches.config'

export const Table = styled('table', {
  width: '100%',

  borderCollapse: 'collapse'
})

export const Thead = styled('thead', {})

export const Tr = styled('tr', {
  '&:nth-child(even)': {
    bg: '$slate4'
  }
})

export const Th = styled('th', {
  p: '$3',

  fontWeight: '$medium',
  color: '$slate11',

  borderBottom: `1px solid ${slate.slate6}`,

  '.dark &': {
    borderBottom: `1px solid ${slateDark.slate6}`
  }
})

export const Tbody = styled('tbody', {})

export const Td = styled('td', {
  p: '$3',

  textAlign: 'center',

  color: '$slate12'
})
