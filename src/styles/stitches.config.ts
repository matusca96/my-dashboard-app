import { createStitches, PropertyValue } from '@stitches/react'
import {
  slate,
  red,
  green,
  whiteA,
  slateDark,
  redDark,
  greenDark
} from '@radix-ui/colors'

const { styled, css, createTheme, globalCss } = createStitches({
  theme: {
    colors: {
      ...red,
      ...green,
      ...slate,
      ...whiteA
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
    },
    transitions: {
      fast: 'all, 0.25s ease-in-out',
      normal: 'all, 0.5s ease-in-out'
    }
  },
  utils: {
    m: (value: PropertyValue<'margin'>) => ({
      margin: value
    }),
    mt: (value: PropertyValue<'margin'>) => ({
      marginTop: value
    }),
    mr: (value: PropertyValue<'margin'>) => ({
      marginRight: value
    }),
    mb: (value: PropertyValue<'margin'>) => ({
      marginBottom: value
    }),
    ml: (value: PropertyValue<'margin'>) => ({
      marginLeft: value
    }),
    mx: (value: PropertyValue<'margin'>) => ({
      marginLeft: value,
      marginRight: value
    }),
    my: (value: PropertyValue<'margin'>) => ({
      marginTop: value,
      marginBottom: value
    }),
    p: (value: PropertyValue<'padding'>) => ({
      padding: value
    }),
    pt: (value: PropertyValue<'padding'>) => ({
      paddingTop: value
    }),
    pr: (value: PropertyValue<'padding'>) => ({
      paddingRight: value
    }),
    pb: (value: PropertyValue<'padding'>) => ({
      paddingBottom: value
    }),
    pl: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value
    }),
    px: (value: PropertyValue<'padding'>) => ({
      paddingLeft: value,
      paddingRight: value
    }),
    py: (value: PropertyValue<'padding'>) => ({
      paddingTop: value,
      paddingBottom: value
    }),
    bg: (value: PropertyValue<'backgroundColor'>) => ({
      backgroundColor: value
    })
  }
})

export const darkTheme = createTheme('dark', {
  colors: {
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
