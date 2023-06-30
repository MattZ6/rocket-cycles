import { NavLink } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace LinkStyles {
  export const Link = styled(NavLink, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    $$size: '32px',

    height: '$$size',

    position: 'relative',

    color: '$defaultHighContrastText',

    borderRadius: '$small',
    outline: '2px solid transparent',
    outlineOffset: '2px',

    paddingLeft: '$midNormal',
    paddingRight: '$normal',

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

  export const Label = styled('span', {
    fontFamily: '$texts',
    fontSize: '$normal',
  })
}
