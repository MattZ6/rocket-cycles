import { ReactNode } from 'react'

import { FieldRootStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function FieldRoot(props: Props) {
  return <Styles.Container {...props} />
}
