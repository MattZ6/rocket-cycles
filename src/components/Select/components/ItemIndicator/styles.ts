import { ItemIndicator } from '@radix-ui/react-select'

import { styled } from '@styles/stitches.config'

export namespace SelectItemIndicatorStyles {
  export const Container = styled(ItemIndicator, {
    position: 'absolute',
    left: '$normal',

    color: '$defaultLowContrastText',
  })
}
