import * as SeparatorPrimitive from '@radix-ui/react-separator'
import { styled } from '../../styles/stitches.config'

export const Box = styled('div')

export const Flex = styled('div', {
  display: 'flex'
})

export const Text = styled('span')

export const Separator = styled(SeparatorPrimitive.Root, {
  bg: '$slate6',
  '&[data-orientation=horizontal]': { height: 1, width: '100%' },
  '&[data-orientation=vertical]': { height: '100%', width: 1 },
  transition: '$fast'
})
