import { createStitches } from '@stitches/react'
import {
  indigo,
  slate,
  red,
  green,
  indigoDark,
  slateDark,
  redDark,
  greenDark
} from '@radix-ui/colors'

const { styled, css, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      ...indigo,
      ...red,
      ...green,
      ...slate
    },
    fonts: {
      inter: 'Inter, sans-serif'
    },
    fontSizes: {
      1: '12px',
      2: '14px',
      3: '16px',
      4: '20px',
      5: '24px',
      6: '32px'
    },
    fontWeights: {
      light: '300',
      regular: '400',
      medium: '500',
      bold: '700'
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px'
    },
    sizes: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px'
    },
    radii: {
      1: '2px',
      2: '4px',
      3: '8px',
      round: '9999px'
    }
  }
})

export const darkTheme = createTheme('dark-theme', {
  colors: {
    ...indigoDark,
    ...redDark,
    ...greenDark,
    ...slateDark
  }
})

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontSmooth: 'always'
  },
  body: {
    fontFamily: '$inter'
  }
})

export { styled, css }
