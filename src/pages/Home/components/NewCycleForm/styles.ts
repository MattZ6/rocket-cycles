import { styled } from '@styles/stitches.config'

export namespace NewCycleFormStyles {
  export const Container = styled('div', {
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
}
