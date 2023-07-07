import { Item } from '@radix-ui/react-select'

import { styled } from '@styles/stitches.config'

export namespace SelectItemStyles {
  export const Container = styled(Item, {
    display: 'flex',
    alignItems: 'center',
    gap: '$small',

    position: 'relative',

    fontSize: '$normal',
    lineHeight: 1,
    color: '$defaultHighContrastText',

    borderRadius: '$small',

    height: '36px',
    paddingRight: '$normal',
    paddingLeft: 'calc($normal + 12px + $small)',

    userSelect: 'none',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color',
    },

    '&:not(:disabled)': {
      cursor: 'pointer',
    },

    '&[data-highlighted]': {
      outline: 'none',

      backgroundColor: '$defaultElementBackgroundActive',
    },
  })
}
