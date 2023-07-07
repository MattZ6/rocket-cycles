import { Content } from '@radix-ui/react-select'

import { styled } from '@styles/stitches.config'

export namespace SelectContentStyles {
  export const Container = styled(Content, {
    overflow: 'hidden',

    backgroundColor: '$defaultElementBackground',
    borderRadius: '$small',

    boxShadow: '0 10px 28px rgba(0, 0, 0, 0.32)',
  })
}
