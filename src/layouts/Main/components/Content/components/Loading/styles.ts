import { styled } from '@styles/stitches.config'

export namespace LoadingStyles {
  export const Container = styled('div', {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '$small',

    padding: '$medium',
  })

  export const SkeletonTitle = styled('div', {
    width: '40%',
    height: '32px',
    borderRadius: '4px',

    backgroundColor: '$defaultElementBackground',
  })

  export const SkeletonTextBlock = styled('div', {
    width: '100%',
    height: '24px',
    borderRadius: '4px',

    backgroundColor: '$defaultElementBackground',

    '&:last-child': {
      width: '60%',
    },
  })
}
