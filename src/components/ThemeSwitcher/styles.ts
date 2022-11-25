import {
  Root as SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectIcon,
  SelectPortal,
  SelectContent,
  SelectViewport,
  SelectItem,
  SelectItemText,
  SelectItemIndicator,
} from '@radix-ui/react-select'

import { styled } from '@styles/stitches.config'

export namespace ThemeSwitcherStyles {
  export const Root = SelectRoot

  export const Trigger = styled(SelectTrigger, {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    justifySelf: 'flex-end',
    gap: '$midNormal',

    fontSize: '$normal',
    lineHeight: 1,

    height: '32px',

    paddingLeft: '$normal',
    paddingRight: '$midNormal',

    borderRadius: '$small',
    backgroundColor: 'transparent',
    border: 'none',
    color: '$defaultHighContrastText',

    outline: '2px solid transparent',

    '@media (prefers-reduced-motion: no-preference)': {
      transition: '$default',
      transitionProperty: 'background-color, color, outline-color',
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

    '&[data-state="open"]': {
      backgroundColor: '$defaultElementBackgroundHover',
    },
  })

  export const Value = SelectValue

  export const Icon = SelectIcon

  export const Portal = SelectPortal

  export const Content = styled(SelectContent, {
    overflow: 'hidden',
    backgroundColor: '$defaultElementBackground',
    borderRadius: '$small',

    boxShadow: '0 5px 20px rgba(0, 0, 0, 0.1)',
    border: '1px solid $defaultBorder',
  })

  export const Viewport = SelectViewport

  export const Item = styled(SelectItem, {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: '$small',

    fontSize: '$normal',
    lineHeight: 1,

    height: '32px',

    paddingLeft: '$normal',
    paddingRight: '$midNormal',

    userSelect: 'none',

    '&:not([data-disabled])': {
      cursor: 'pointer',
    },

    '&[data-highlighted]': {
      outline: 'none',
      backgroundColor: '$defaultElementBackgroundHover',
    },
  })

  export const ItemText = SelectItemText

  export const ItemIndicator = styled(SelectItemIndicator, {
    flexShrink: 0,
  })
}
