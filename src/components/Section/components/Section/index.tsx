import { ReactNode } from 'react'

import { SectionRootStyles as Styles } from './styles'

type Props = {
  title: string
  children: ReactNode
}

export function SectionRoot({ title, children }: Props) {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
      </Styles.Header>

      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}
