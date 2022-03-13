import * as ScrollAreaPrimitive from '@radix-ui/react-scroll-area'
import { mauve, blackA } from '@radix-ui/colors'

import { styled } from '../../styles/stitches.config'

export const StyledScrollArea = styled(ScrollAreaPrimitive.Root, {
  width: '100%',
  height: '100%',
  borderRadius: '$2',
  overflow: 'hidden'
})

export const StyledViewport = styled(ScrollAreaPrimitive.Viewport, {
  width: '100%',
  height: '100%',

  borderRadius: 'inherit'
})

export const StyledScrollbar = styled(ScrollAreaPrimitive.Scrollbar, {
  display: 'flex',
  // ensures no selection
  userSelect: 'none',
  // disable browser handling of all panning and zooming gestures on touch devices
  touchAction: 'none',
  padding: '2px',
  background: blackA.blackA6,
  '&:hover': { background: blackA.blackA8 },
  '&[data-orientation="vertical"]': { width: 10 },
  '&[data-orientation="horizontal"]': {
    flexDirection: 'column',
    height: 10
  }
})

export const StyledThumb = styled(ScrollAreaPrimitive.Thumb, {
  flex: 1,
  background: mauve.mauve10,
  borderRadius: 10,
  // increase target size for touch devices https://www.w3.org/WAI/WCAG21/Understanding/target-size.html
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '100%',
    height: '100%',
    minWidth: 44,
    minHeight: 44
  }
})

export const StyledCorner = styled(ScrollAreaPrimitive.Corner, {
  background: blackA.blackA8
})
