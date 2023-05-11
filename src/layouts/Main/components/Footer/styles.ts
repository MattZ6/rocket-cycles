import { styled } from '@styles/stitches.config'

export namespace FooterStyles {
  export const Footer = styled('footer', {})

  export const Content = styled('div', {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    alignItems: 'center',
    gap: '$large',

    width: '100%',
    maxWidth: '$largeScreen',

    paddingTop: '$normal',
    paddingBottom: '$medium',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    margin: '0 auto',
  })
}
