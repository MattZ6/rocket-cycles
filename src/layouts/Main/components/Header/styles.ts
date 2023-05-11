import { styled } from '@styles/stitches.config'

export namespace HeaderStyles {
  export const Header = styled('header')

  export const Content = styled('div', {
    display: 'flex',
    alignItems: 'center',
    gap: '$large',

    width: '100%',
    maxWidth: '$largeScreen',

    paddingTop: '$medium',
    paddingBottom: '$normal',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    margin: '0 auto',
  })
}
