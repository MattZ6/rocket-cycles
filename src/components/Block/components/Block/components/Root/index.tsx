import { ReactNode } from 'react'

import { BlockRootStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function BlockRoot(props: Props) {
  return <Styles.Block {...props} />
}
