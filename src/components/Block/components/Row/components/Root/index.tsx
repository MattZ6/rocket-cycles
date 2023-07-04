import { ReactNode } from 'react'

import { RowStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function RowRoot(props: Props) {
  return <Styles.Container {...props} />
}
