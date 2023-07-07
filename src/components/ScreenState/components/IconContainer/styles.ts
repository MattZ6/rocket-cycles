import { styled } from '@styles/stitches.config'

export namespace ScreenStateIconContainerStyles {
  export const Container = styled('div', {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    backgroundColor: '$defaultElementBackground',

    borderRadius: '$full',

    padding: '$medium',
    color: '$defaultLowContrastText',
  })
}
