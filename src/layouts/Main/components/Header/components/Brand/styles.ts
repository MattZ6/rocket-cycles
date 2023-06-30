import { styled } from '@styles/stitches.config'

export namespace BrandStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$midNormal',

    userSelect: 'none',
    pointerEvents: 'none',
  })

  export const Title = styled('strong', {
    fontFamily: '$mono',
    fontSize: '$medium',
    lineHeight: '$medium',
    letterSpacing: '-0.5px',
    color: '$brandSolid',
  })
}
