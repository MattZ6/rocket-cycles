import { ReactNode } from 'react'

import { PageStyles as Styles } from './styles'

type Props = {
  title: string
  children: ReactNode
}

export function Page({ title, children }: Props) {
  return (
    <Styles.Container>
      <Styles.Title>{title}</Styles.Title>

      <Styles.Content>{children}</Styles.Content>
    </Styles.Container>
  )
}
