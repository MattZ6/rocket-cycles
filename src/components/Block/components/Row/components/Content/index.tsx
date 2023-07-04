import { ReactNode } from 'react'

import { ContentStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function RowContent(props: Props) {
  return <Styles.Content {...props} />
}
