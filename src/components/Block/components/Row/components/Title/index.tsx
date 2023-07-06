import { ReactNode } from 'react'

import { RowTitleStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function RowTitle(props: Props) {
  return <Styles.Title {...props} />
}
