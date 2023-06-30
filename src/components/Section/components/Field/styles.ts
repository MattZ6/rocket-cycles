import { styled } from '@styles/stitches.config'

export namespace SectionFieldStyles {
  export const Container = styled('article', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',
  })

  export const Header = styled('header', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$smaller',
  })

  export const Title = styled('h3', {
    fontSize: '$default',
    lineHeight: '$default',
    fontWeight: '$medium',
  })

  export const Description = styled('p', {
    fontSize: '$default',
    lineHeight: '$default',
    color: '$defaultLowContrastText',
  })

  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',
  })
}
