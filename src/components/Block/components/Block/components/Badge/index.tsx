import { ReactNode } from 'react'

import { BlockBadgeStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function BlockBadge(props: Props) {
  return <Styles.Badge {...props} />
}
