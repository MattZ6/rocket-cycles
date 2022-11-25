import { styled } from '@styles/stitches.config'

export namespace HeaderStyles {
  export const Container = styled('header', {
    display: 'grid',
    alignItems: 'center',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '$normal',

    padding: '0 $medium',
    height: '72px',
  })
}
