import { ReactNode } from 'react'

import { FieldContentStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function FieldContent(props: Props) {
  return <Styles.Content {...props} />
}
