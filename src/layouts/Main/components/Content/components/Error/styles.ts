import { styled } from '@styles/stitches.config'

export namespace ErrorStyles {
  export const Container = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    padding: '$medium',
  })

  export const Title = styled('h3', {
    fontSize: '$medium',
    lineHeight: '$medium',

    marginTop: '$normal',
  })

  export const Message = styled('p', {
    fontSize: '$default',
    lineHeight: '$default',
    textAlign: 'center',
    color: '$defaultLowContrastText',

    marginTop: '$small',
  })

  export const RetryButton = styled('button', {
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

    outline: '2px solid transparent',

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
