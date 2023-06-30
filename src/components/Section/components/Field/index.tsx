import { ReactNode } from 'react'

import { SectionFieldStyles as Styles } from './styles'

type Props = {
  title: string
  description?: string
  children: ReactNode
}

export function SectionField({ title, description, children }: Props) {
  return (
    <Styles.Container>
      <Styles.Header>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.Header>

      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}
