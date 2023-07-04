import { Link } from 'react-router-dom'

import { keyframes, styled } from '@styles/stitches.config'

export namespace NotFoundPageStyles {
  const fadeInAnimation = keyframes({
    from: {
      opacity: 0,
      transform: 'translateY(8px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  })

  export const Container = styled('section', {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '$medium',

    width: '100%',
    maxWidth: '$largeScreen',

    margin: '0 auto',

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeInAnimation} 150ms ease-out`,
    },
  })

  export const Title = styled('h3', {
    fontSize: '$medium',
    lineHeight: '$medium',

    marginTop: '$normal',
  })

  export const Message = styled('p', {
    fontSize: '$default',
    lineHeight: '$default',
    color: '$defaultLowContrastText',

    marginTop: '$small',
  })

  export const BackLink = styled(Link, {
    marginTop: '$small',

    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    height: '40px',
    padding: '0 $normal',
    borderRadius: '$small',

    backgroundColor: 'transparent',
    border: 'none',

    color: '$brandSolid',
    fontSize: '$normal',
    lineHeight: '$normal',
    fontWeight: '$regular',

    textDecoration: 'none',

    outline: '2px solid transparent',
    outlineOffset: '2px',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$brandElementBackgroundHover',
      color: '$brandSolidHover',
    },

    '&:focus-visible': {
      outlineColor: '$brandBorder',
    },
  })
}
