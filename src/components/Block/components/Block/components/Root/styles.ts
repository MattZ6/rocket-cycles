import { styled } from '@styles/stitches.config'

export namespace BlockRootStyles {
  export const Block = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    borderRadius: '$small',
    border: '1px solid $defaultBorder',

    backgroundColor: '$defaultSubtleBackground',
  })
}
