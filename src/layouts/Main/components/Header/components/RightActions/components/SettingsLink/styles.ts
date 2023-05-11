import { NavLink } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace SettingsLinkStyles {
  export const Link = styled(NavLink, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '40px',

    width: '$$size',
    height: '$$size',

    color: '$defaultHighContrastText',

    borderRadius: '$small',
    outline: '2px solid transparent',

    lineHeight: 0,
    textDecoration: 'none',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementBackgroundHover',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },

    '&[aria-current="page"]': {
      color: '$brandSolid',

      backgroundColor: '$brandElementBackground',

      '&:not(:disabled):hover': {
        backgroundColor: '$brandElementBackgroundHover',
        color: '$brandSolidHover',
      },

      '&:focus-visible': {
        outlineColor: '$brandBorder',
      },
    },
  })
}
