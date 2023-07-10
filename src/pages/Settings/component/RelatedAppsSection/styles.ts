import { styled } from '@styles/stitches.config'

export namespace RelatedAppsSectionStyles {
  export const Link = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$small',

    paddingTop: '$smaller',
    paddingBottom: '$smaller',

    paddingLeft: '12px',
    paddingRight: '$small',

    backgroundColor: '$defaultElementBackground',
    borderRadius: '$full',

    color: '$defaultHighContrastText',
    textDecoration: 'none',

    outline: '2px solid transparent',
    outlineOffset: '2px',

    fontSize: '$normal',
    lineHeight: '$normal',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, outline-color',
    },

    '&:hover': {
      backgroundColor: '$defaultElementBackgroundHover',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  })
}
