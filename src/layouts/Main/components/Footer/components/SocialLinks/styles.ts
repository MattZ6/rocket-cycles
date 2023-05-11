import { styled } from '@styles/stitches.config'

export namespace SocialLinksStyles {
  export const Navigation = styled('nav', {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',
  })

  export const LinkButton = styled('a', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    textDecoration: 'none',

    $$size: '32px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$small',

    color: '$defaultLowContrastText',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
    },

    '&:hover': {
      backgroundColor: '$defaultElementBackgroundHover',
      color: '$defaultHighContrastText',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  })
}
