import { ReactNode } from 'react'

import { RowRight as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function RowRight(props: Props) {
  return <Styles.Container {...props} />
}
