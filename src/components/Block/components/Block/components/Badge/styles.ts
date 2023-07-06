import { styled } from '@styles/stitches.config'

export namespace BlockBadgeStyles {
  export const Badge = styled('span', {
    backgroundColor: '$defaultBackground',

    fontSize: '$normal',
    color: '$defaultLowContrastText',
    fontWeight: '$medium',

    padding: '$smaller $small',
    borderRadius: '$full',
  })
}
