import {
  slate,
  blue,
  blueA,
  red,
  slateDark,
  blueDark,
  blueDarkA,
  redDark,
  grass,
  grassDark,
  orangeDark,
  orange,
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

      successSolid: grass.grass9,
      successSolidHover: grass.grass10,

      pendingSolid: orange.orange9,
      pendingSolidHover: orange.orange10,

      dangerSolid: red.red9,
      dangerSolidHover: red.red10,

      tooltipBackground: slateDark.slate1,
      tooltipText: slateDark.slate12,

      selectionBackground: blueA.blueA5,
      selectionText: blueA.blueA11,
    },

    fonts: {
      texts: "'Roboto', sans-serif",
      mono: "'Roboto Mono', monospace",
    },

    fontSizes: {
      normal: '14px',
      default: '16px',
      medium: '20px',
      headline: '32px',
      countdown: '160px',
    },

    lineHeights: {
      normal: '24px',
      default: '24px',
      medium: '32px',
      headline: '160%',
      countdown: '128px',
    },

    fontWeights: {
      regular: 400,
      medium: 500,
      bold: 700,
    },

    sizes: {
      largeScreen: '1180px',
    },

    space: {
      smaller: '4px',
      small: '8px',
      midNormal: '12px',
      normal: '16px',
      medium: '24px',
      lg: '40px',
      large: '56px',
    },

    radii: {
      small: '8px',
      full: '999999px',
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

    successSolid: grassDark.grass9,
    successSolidHover: grassDark.grass10,

    pendingSolid: orangeDark.orange9,
    pendingSolidHover: orangeDark.orange10,

    dangerSolid: redDark.red9,
    dangerSolidHover: redDark.red10,

    tooltipBackground: slate.slate1,
    tooltipText: slate.slate12,

    selectionBackground: blueDarkA.blueA5,
    selectionText: blueDarkA.blueA11,
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

  '::selection': {
    backgroundColor: '$selectionBackground',
    color: '$selectionText',
  },

  img: {
    userSelect: 'none',
  },

  a: {
    userSelect: 'none',
  },

  button: {
    userSelect: 'none',
  },

  html: {
    backgroundColor: '$defaultBackground',
    color: '$defaultHighContrastText',
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
