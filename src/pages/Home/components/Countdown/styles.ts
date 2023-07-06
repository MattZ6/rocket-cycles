import { styled } from '@styles/stitches.config'

export namespace CountdownStyles {
  export const Container = styled('div', {
    display: 'flex',
    gap: '$normal',

    userSelect: 'none',
  })

  export const Number = styled('span', {
    fontFamily: '$mono',
    fontSize: '$countdown',
    lineHeight: '$countdown',
    color: '$defaultHighContrastText',

    backgroundColor: '$defaultElementBackground',
    paddingTop: '$medium',
    paddingBottom: '$medium',
    paddingLeft: '$normal',
    paddingRight: '$normal',

    borderRadius: '$small',
  })

  export const Separator = styled('span', {
    display: 'flex',
    justifyContent: 'center',

    fontFamily: '$mono',
    fontSize: '$countdown',
    lineHeight: '$countdown',
    color: '$brandSolid',

    paddingTop: '$medium',
    paddingBottom: '$medium',

    width: '64px',
    overflow: 'hidden',
  })
}
