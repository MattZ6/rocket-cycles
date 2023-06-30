import { keyframes, styled } from '@styles/stitches.config'

export namespace PageStyles {
  const fadeInAnimation = keyframes({
    from: { opacity: 0 },
    to: { opacity: 1 },
  })

  export const Container = styled('main', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',

    paddingTop: '$large',
    paddingBottom: '$large',

    paddingLeft: '$normal',
    paddingRight: '$normal',

    width: '100%',
    maxWidth: '$largeScreen',

    margin: '0 auto',

    '@media (prefers-reduced-motion: no-preference)': {
      animation: `${fadeInAnimation} 150ms ease-out`,
    },
  })

  export const Title = styled('h1', {
    fontSize: '$headline',
    lineHeight: '$headline',
  })

  export const Content = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$lg',
  })
}
