import { styled } from '@styles/stitches.config'

export namespace BlockHeaderStyles {
  export const Header = styled('header', {
    display: 'flex',
    alignItems: 'center',
    gap: '$normal',

    padding: '$normal $medium',
    borderBottom: '1px solid $defaultBorder',
  })
}
