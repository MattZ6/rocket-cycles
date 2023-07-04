import { styled } from '@styles/stitches.config'

export namespace OptionCardStyles {
  const BORDER_SIZE = 1

  export const Button = styled('button', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    borderRadius: '$small',

    backgroundColor: '$defaultElementBackground',

    borderWidth: BORDER_SIZE,
    borderStyle: 'solid',
    borderColor: '$defaultElementBorder',

    color: '$defaultHighContrastText',

    overflow: 'hidden',

    outlineWidth: '2px',
    outlineStyle: 'solid',
    outlineColor: 'transparent',
    outlineOffset: '2px',

    '&:not(disabled)': {
      cursor: 'pointer',
    },

    '&:not(disabled):hover': {
      backgroundColor: '$defaultElementBackgroundHover',
      transform: 'translateY(-2px)',
    },

    '&:focus-visible': {
      outlineColor: '$defaultElementBorderActive',
    },

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty:
        'background-color, border-color, transform, outline-color',
    },

    variants: {
      selected: {
        true: {
          borderColor: '$brandSolid',
          color: '$brandSolid',

          '&:focus-visible': {
            outlineColor: '$brandBorder',
          },
        },
      },
    },
  })

  export const ImageContainer = styled('div', {
    width: '100%',
    height: 150,
    backgroundColor: '$defaultSubtleBackground',
  })

  export const Footer = styled('footer', {
    width: '100%',

    display: 'flex',
    alignItems: 'center',
    gap: '$normal',

    paddingTop: '$smaller',
    paddingBottom: '$smaller',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderTopWidth: BORDER_SIZE,
    borderTopStyle: 'solid',
    borderTopColor: '$defaultElementBorder',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'border-color',
    },

    '> svg': {
      color: '$defaultLowContrastText',

      '@media (prefers-reduced-motion: no-preference)': {
        transition: '$default',
        transitionProperty: 'color',
      },
    },

    variants: {
      selected: {
        true: {
          borderColor: '$brandSolid',
          backgroundColor: '$brandElementBackground',

          '> svg': {
            color: '$brandSolid',
          },
        },
      },
    },
  })

  export const Name = styled('span', {
    flex: 1,
    fontSize: '$normal',
    fontWeight: '$medium',
    lineHeight: '$normal',
    textAlign: 'left',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'color',
    },
  })

  export const IconContainer = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    position: 'relative',

    $$size: '20px',

    width: '$$size',
    height: '$$size',
    borderRadius: '$$size',

    borderWidth: '1px',
    borderStyle: 'solid',
    borderColor: '$defaultElementBorder',

    backgroundColor: '$defaultSubtleBackground',

    '> svg': {
      position: 'absolute',
      color: '$brandSolid',

      transform: 'scale(0.8)',
      opacity: 0,

      '@media (prefers-reduced-motion: no-preference)': {
        transition: '$default',
        transitionProperty: 'transform, opacity',
      },
    },

    variants: {
      selected: {
        true: {
          '> svg': { transform: 'scale(1)', opacity: 1 },
        },
      },
    },
  })
}
