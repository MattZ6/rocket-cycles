import { ReactNode } from 'react'

import { BlockHeaderStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function BlockHeader(props: Props) {
  return <Styles.Header {...props} />
}
