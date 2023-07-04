import { styled } from '@styles/stitches.config'

export namespace BlockSeparatorStyles {
  export const Separator = styled('hr', {
    borderTop: '1px solid $defaultBorder',
    borderBottom: 'none',
    borderLeft: 'none',
    borderRight: 'none',
  })
}
