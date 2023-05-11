import { styled } from '@styles/stitches.config'

export namespace ThemeSwitcherStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignContent: 'center',
    justifySelf: 'flex-end',
    gap: '$smaller',

    padding: '$smaller',
    borderRadius: '40px',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$defaultBorder',
  })

  export const Button = styled('button', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    $$size: '32px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    border: 'none',

    backgroundColor: 'transparent',
    color: '$defaultLowContrastText',
    fontSize: '$medium',

    cursor: 'pointer',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
    },

    '&:hover': {
      color: '$defaultHighContrastText',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorder',
    },

    variants: {
      selected: {
        true: {
          backgroundColor: '$defaultElementBackgroundActive',
          color: '$defaultHighContrastText',
        },
      },
    },
  })
}
