import {
  sage,
  green,
  tomato,
  sageDark,
  greenDark,
  tomatoDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const { globalCss, createTheme, theme } = createStitches({
  theme: {
    colors: {
      defaultBackground: sage.sage1,
      defaultSubtleBackground: sage.sage2,
      defaultElementBackground: sage.sage3,
      defaultElementBackgroundHover: sage.sage4,
      defaultElementBackgroundActive: sage.sage5,
      defaultBorder: sage.sage6,
      defaultElementBorder: sage.sage7,
      defaultElementBorderActive: sage.sage8,
      defaultSolid: sage.sage9,
      defaultSolidHover: sage.sage10,
      defaultLowContrastText: sage.sage11,
      defaultHighContrastText: sage.sage12,

      brandSolid: green.green9,
      brandSolidHover: green.green10,

      dangerSolid: tomato.tomato9,
      dangerSolidHover: tomato.tomato10,
    },

    fonts: {
      texts: "'Roboto', sans-serif",
      mono: "'Roboto Mono', monospace",
    },

    fontWeights: {
      regular: 400,
      bold: 700,
    },
  },
})

const darkTheme = createTheme({
  colors: {
    defaultBackground: sageDark.sage1,
    defaultSubtleBackground: sageDark.sage2,
    defaultElementBackground: sageDark.sage3,
    defaultElementBackgroundHover: sageDark.sage4,
    defaultElementBackgroundActive: sageDark.sage5,
    defaultBorder: sageDark.sage6,
    defaultElementBorder: sageDark.sage7,
    defaultElementBorderActive: sageDark.sage8,
    defaultSolid: sageDark.sage9,
    defaultSolidHover: sageDark.sage10,
    defaultLowContrastText: sageDark.sage11,
    defaultHighContrastText: sageDark.sage12,

    brandSolid: greenDark.green9,
    brandSolidHover: greenDark.green10,

    dangerSolid: tomatoDark.tomato9,
    dangerSolidHover: tomatoDark.tomato10,
  },
})

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    fontFamily: '$texts',

    '-webkit-tap-highlight-color': 'transparent',
  },

  html: {
    backgroundColor: '$defaultBackground',
    color: '$defaultHighContrastText',
  },
})

export { globalStyles, theme as lightTheme, darkTheme, createTheme }
