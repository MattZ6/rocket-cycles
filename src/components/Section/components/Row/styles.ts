import { styled } from '@styles/stitches.config'

export namespace SectionRowStyles {
  export const Container = styled('article', {
    display: 'flex',
    gap: '$medium',
  })

  export const Info = styled('div', {
    flex: 1,
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
    alignItems: 'center',
    justifyContent: 'flex-end',
  })
}
