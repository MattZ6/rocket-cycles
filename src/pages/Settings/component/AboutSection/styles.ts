import { Link } from 'react-router-dom'

import { styled } from '@styles/stitches.config'

export namespace AboutSectionStyles {
  export const Version = styled('span', {
    fontFamily: '$mono',
    fontWeight: '$regular',
    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$defaultLowContrastText',
  })

  export const CommitHash = styled('span', {
    fontFamily: '$mono',
    fontWeight: '$regular',
    fontSize: '$normal',
    lineHeight: '$normal',
    color: '$defaultLowContrastText',
  })

  export const ExternalLink = styled('a', {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '$small',

    paddingTop: '$smaller',
    paddingBottom: '$smaller',

    $$horizontalPadding: '12px',

    paddingLeft: '$small',
    paddingRight: '$$horizontalPadding',

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

  export const InternalLink = styled(Link, {
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

  export const Avatar = styled('img', {
    $$size: '20px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',
  })
}
