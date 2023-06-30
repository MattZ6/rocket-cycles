import { styled } from '@styles/stitches.config'

export namespace AppearanceSectionStyles {
  export const ThemesList = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '$medium',
  })
}
