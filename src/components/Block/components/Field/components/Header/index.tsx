import { ReactNode } from 'react'

import { FieldHeaderStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function FieldHeader(props: Props) {
  return <Styles.Header {...props} />
}
