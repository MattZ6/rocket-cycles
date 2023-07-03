import { styled } from '@styles/stitches.config'

export namespace SectionRootStyles {
  export const Container = styled('section', {
    display: 'flex',
    flexDirection: 'column',

    borderRadius: '$small',
    border: '1px solid $defaultBorder',

    backgroundColor: '$defaultSubtleBackground',
  })

  export const Header = styled('header', {
    padding: '$normal $medium',
    borderBottom: '1px solid $defaultBorder',
  })

  export const Title = styled('h2', {
    fontSize: '$medium',
    lineHeight: '$medium',
    fontWeight: '$medium',
  })

  export const Content = styled('div', {
    display: 'flex',
    flexDirection: 'column',
    gap: '$medium',

    variants: {
      withoutInternalPadding: {
        true: {},
        false: {
          padding: '$medium',
        },
      },
    },

    defaultVariants: {
      withoutInternalPadding: 'false',
    },
  })
}
