import { ReactNode } from 'react'

import { SectionRowStyles as Styles } from './styles'

type Props = {
  title: string
  description?: string
  children?: ReactNode
}

export function SectionRow({ title, description, children }: Props) {
  return (
    <Styles.Container>
      <Styles.Info>
        <Styles.Title>{title}</Styles.Title>
        <Styles.Description>{description}</Styles.Description>
      </Styles.Info>

      {children && <Styles.Content>{children}</Styles.Content>}
    </Styles.Container>
  )
}
