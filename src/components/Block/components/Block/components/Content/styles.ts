import { styled } from '@styles/stitches.config'

export namespace SectionContentStyles {
  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',

    variants: {
      withPadding: {
        true: {
          padding: '$medium',
        },
        false: {},
      },
    },

    defaultVariants: {
      withPadding: 'false',
    },
  })
}
