import { styled } from '@styles/stitches.config'

export namespace AuthorStyles {
  export const Text = styled('span', {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '$smaller',

    fontSize: '$normal',
    lineHeight: '$normal',
    textAlign: 'center',
    color: '$defaultLowContrastText',
  })

  export const Link = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$smaller',

    $$horizontal: '6px',

    paddingLeft: '$$horizontal',
    paddingRight: '$$horizontal',

    $$vertical: '2px',

    paddingTop: '$$vertical',
    paddingBottom: '$$vertical',

    color: '$defaultHighContrastText',
    textDecoration: 'none',

    borderRadius: '$small',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
    },

    '&:hover': {
      backgroundColor: '$defaultElementBackgroundHover',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  })

  export const Avatar = styled('img', {
    $$size: '20px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$defaultBorder',

    objectFit: 'cover',
  })
}
