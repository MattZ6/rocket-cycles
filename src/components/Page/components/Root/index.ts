import { keyframes, styled } from '@styles/stitches.config'

const fadeInAnimation = keyframes({
  from: { opacity: 0 },
  to: { opacity: 1 },
})

export const PageRoot = styled('main', {
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
