import { keyframes, styled } from '@styles/stitches.config'

export namespace HomePageStyles {
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

  export const Container = styled('div', {
    flex: 1,

    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',

    width: '100%',
    maxWidth: '$largeScreen',

    margin: '0 auto',

    '> form': {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '$large',
    },

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeInAnimation} 150ms ease-out`,
    },
  })

  const BaseButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    width: '100%',

    border: 0,
    padding: '$normal',
    borderRadius: '$small',

    fontWeight: '$bold',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color, opacity',
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },
  })

  export const StartCountdownButton = styled(BaseButton, {
    backgroundColor: '$brandSolid',
    color: '$brandHighContrastText',

    '&:not(:disabled):hover': {
      backgroundColor: '$brandSolidHover',
    },

    '&:focus-visible': {
      outlineColor: '$brandBorder',
    },
  })

  export const StopCountdownButton = styled(BaseButton, {
    backgroundColor: '$dangerSolid',
    color: '$dangerHighContrastText',

    '&:not(:disabled):hover': {
      backgroundColor: '$dangerSolidHover',
    },

    '&:focus-visible': {
      outlineColor: '$dangerBorder',
    },
  })
}
