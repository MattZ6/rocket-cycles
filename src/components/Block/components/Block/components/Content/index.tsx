import { VariantProps } from '@stitches/react'
import { ReactNode } from 'react'

import { SectionContentStyles as Styles } from './styles'

type Props = {
  children: ReactNode
} & VariantProps<typeof Styles.Content>

export function SectionContent(props: Props) {
  return <Styles.Content {...props} />
}
