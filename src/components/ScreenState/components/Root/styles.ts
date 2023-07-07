import { styled } from '@styles/stitches.config'

export namespace ScreenStateRootStyles {
  export const Container = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '$medium',

    padding: '$medium',
  })
}
