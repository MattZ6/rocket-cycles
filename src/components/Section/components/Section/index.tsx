import { VariantProps } from '@stitches/react'
import { ReactNode } from 'react'

import { SectionRootStyles as Styles } from './styles'

type Props = {
  title: string
  children: ReactNode
} & VariantProps<typeof Styles.Content>

export function SectionRoot({
  title,
  children,
  withoutInternalPadding,
}: Props) {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Header>

      <Styles.Content withoutInternalPadding={!!withoutInternalPadding}>
        {children}
      </Styles.Content>
    </Styles.Container>
  )
}
