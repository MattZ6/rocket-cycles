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

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeInAnimation} 150ms ease-out`,
    },
  })

  export const Form = styled('form', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$large',
  })

  export const FieldsContainer = styled('div', {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
    gap: '$small',

    color: '$defaultHighContrastText',
    fontSize: '$medium',
    fontWeight: '$bold',
  })

  const BaseInput = styled('input', {
    backgroundColor: 'transparent',

    height: '40px',
    border: 0,
    borderBottom: '2px solid $defaultElementBorder',

    color: '$defaultHighContrastText',
    fontSize: 'inherit',
    fontWeight: '$bold',

    paddingLeft: '$small',
    paddingRight: '$small',

    boxShadow: 'none',
    outline: 'none',

    caretColor: '$brandSolid',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'border-color',
    },

    '&::placeholder': {
      color: '$defaultLowContrastText',
      fontWeight: '$regular',
    },

    '&:focus-visible': {
      borderColor: '$brandSolid',
    },
  })

  export const TaskInput = styled(BaseInput, {
    textAlign: 'center',
    width: '320px',

    '&::-webkit-calendar-picker-indicator': {
      display: 'none !important',
    },
  })

  export const MinutesAmountInput = styled(BaseInput, {
    textAlign: 'center',
    width: '64px',
  })

  export const CountdownContainer = styled('div', {
    display: 'flex',
    gap: '$normal',

    userSelect: 'none',
  })

  export const CountdownNumber = styled('span', {
    fontFamily: '$mono',
    fontSize: '$countdown',
    lineHeight: '$countdown',
    color: '$defaultHighContrastText',

    backgroundColor: '$defaultElementBackground',
    paddingTop: '$medium',
    paddingBottom: '$medium',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$small',
  })

  export const CountdownSeparator = styled('span', {
    display: 'flex',
    justifyContent: 'center',

    fontFamily: '$mono',
    fontSize: '$countdown',
    lineHeight: '$countdown',
    color: '$brandSolid',

    paddingTop: '$medium',
    paddingBottom: '$medium',

    width: '64px',
    overflow: 'hidden',
  })

  export const StartCountdownButton = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    width: '100%',

    border: 0,
    padding: '$normal',
    borderRadius: '$small',

    fontWeight: '$bold',

    backgroundColor: '$brandSolid',
    color: '$brandHighContrastText',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color, opacity',
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$brandSolidHover',
    },

    '&:disabled': {
      opacity: 0.7,
      cursor: 'not-allowed',
    },

    '&:focus-visible': {
      outlineColor: '$brandBorder',
    },
  })
}
