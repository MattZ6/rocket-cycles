import { styled } from '@styles/stitches.config'

export namespace LibrariesPageStyles {
  export const Version = styled('span', {
    fontSize: '12px',
    fontFamily: '$mono',
    color: '$defaultLowContrastText',

    padding: '2px 6px',
    borderRadius: '$full',

    marginLeft: '$small',

    backgroundColor: '$defaultBackground',
  })

  export const GitHubLink = styled('a', {
    display: 'inline-flex',
    alignSelf: 'center',
    alignItems: 'center',
    gap: '$small',

    paddingTop: '$smaller',
    paddingBottom: '$smaller',

    paddingLeft: '$small',
    paddingRight: '12px',

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
