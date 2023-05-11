import { styled } from '@styles/stitches.config'

export namespace BrandStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$midNormal',
  })

  export const Title = styled('strong', {
    fontSize: '$medium',
    lineHeight: '$medium',
    color: '$brandSolid',
  })
}
