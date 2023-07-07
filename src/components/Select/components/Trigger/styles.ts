import { Trigger } from '@radix-ui/react-select'

import { styled } from '@styles/stitches.config'

export namespace SelectTriggerStyles {
  export const Button = styled(Trigger, {
    all: 'unset',

    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '$small',

    border: 'none',
    borderRadius: '$small',

    fontSize: '$normal',
    lineHeight: 1,
    color: '$defaultHighContrastText',

    padding: '0 $normal',
    backgroundColor: '$defaultElementBackground',
    height: '36px',

    outline: '2px solid transparent',
    outlineOffset: '2px',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, outline-color',
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&:not(:disabled):hover': {
      backgroundColor: '$defaultElementBackgroundHover',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },
  })
}
