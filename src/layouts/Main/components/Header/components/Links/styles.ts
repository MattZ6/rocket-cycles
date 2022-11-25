import { NavLink } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace LinksStyles {
  export const Container = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',
  })

  export const Link = styled(NavLink, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '48px',

    width: '$$size',
    height: '$$size',

    color: '$defaultHighContrastText',

    borderRadius: '$small',
    outline: '2px solid transparent',

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
