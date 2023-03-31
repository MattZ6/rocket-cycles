import {
  slate,
  blue,
  tomato,
  slateDark,
  blueDark,
  tomatoDark,
} from '@radix-ui/colors'
import { createStitches } from '@stitches/react'

const { globalCss, createTheme, theme, styled, keyframes } = createStitches({
  theme: {
    colors: {
      defaultBackground: slate.slate2,
      defaultSubtleBackground: slate.slate1,
      defaultElementBackground: slate.slate3,
      defaultElementBackgroundHover: slate.slate4,
      defaultElementBackgroundActive: slate.slate5,
      defaultBorder: slate.slate6,
      defaultElementBorder: slate.slate7,
      defaultElementBorderActive: slate.slate8,
      defaultSolid: slate.slate9,
      defaultSolidHover: slate.slate10,
      defaultLowContrastText: slate.slate11,
      defaultHighContrastText: slate.slate12,

      brandElementBackground: blue.blue3,
      brandElementBackgroundHover: blue.blue4,
      brandElementBackgroundActive: blue.blue5,
      brandBorder: blue.blue6,
      brandSolid: blue.blue9,
      brandSolidHover: blue.blue10,
      brandHighContrastText: blueDark.blue12,

      dangerSolid: tomato.tomato9,
      dangerSolidHover: tomato.tomato10,

      tooltipBackground: slateDark.slate1,
      tooltipText: slateDark.slate12,
    },

    fonts: {
      texts: "'Roboto', sans-serif",
      mono: "'Roboto Mono', monospace",
    },

    fontSizes: {
      normal: '14px',
      default: '16px',
      medium: '20px',
      countdown: '160px',
    },

    lineHeights: {
      normal: '24px',
      default: '24px',
      medium: '32px',
      countdown: '128px',
    },

    fontWeights: {
      regular: 400,
      bold: 700,
    },

    sizes: {
      largeScreen: '1120px',
    },

    space: {
      smaller: '4px',
      small: '8px',
      midNormal: '12px',
      normal: '16px',
      medium: '24px',
      large: '56px',
    },

    radii: {
      small: '8px',
    },

    transitions: {
      default: '150ms ease-out',
    },
  },

  media: {
    medium: 'screen and (max-width: 1264px)',
  },
})

const darkTheme = createTheme({
  colors: {
    defaultBackground: slateDark.slate1,
    defaultSubtleBackground: slateDark.slate2,
    defaultElementBackground: slateDark.slate3,
    defaultElementBackgroundHover: slateDark.slate4,
    defaultElementBackgroundActive: slateDark.slate5,
    defaultBorder: slateDark.slate6,
    defaultElementBorder: slateDark.slate7,
    defaultElementBorderActive: slateDark.slate8,
    defaultSolid: slateDark.slate9,
    defaultSolidHover: slateDark.slate10,
    defaultLowContrastText: slateDark.slate11,
    defaultHighContrastText: slateDark.slate12,

    brandElementBackground: blueDark.blue3,
    brandElementBackgroundHover: blueDark.blue4,
    brandElementBackgroundActive: blueDark.blue5,
    brandBorder: blueDark.blue6,
    brandSolid: blueDark.blue9,
    brandSolidHover: blueDark.blue10,
    brandHighContrastText: blueDark.blue12,

    dangerSolid: tomatoDark.tomato9,
    dangerSolidHover: tomatoDark.tomato10,

    tooltipBackground: slate.slate1,
    tooltipText: slate.slate12,
  },
})

const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',

    fontFamily: '$texts',

    '-webkit-tap-highlight-color': 'transparent',
    '-webkit-font-smoothing': 'antialiased',
  },

  html: {
    backgroundColor: '$defaultBackground',
    color: '$defaultHighContrastText',

    '@medium': {
      backgroundColor: '$defaultSubtleBackground',
    },
  },
})

export {
  globalStyles,
  theme as lightTheme,
  darkTheme,
  createTheme,
  styled,
  keyframes,
}
