import { styled } from '@styles/stitches.config'

export namespace MainLayoutStyles {
  export const Wrapper = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: '100vh',

    padding: '72px',

    '@medium': {
      padding: 0,
    },
  })

  export const Container = styled('main', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',

    maxWidth: '$largeScreen',
    width: '100%',

    backgroundColor: '$defaultSubtleBackground',
    borderRadius: '$small',

    boxShadow: '0 5px 35px rgba(0, 0, 0, 0.1)',

    '@medium': {
      maxWidth: 'unset',
      borderRadius: 'unset',

      boxShadow: 'none',
    },
  })
}
