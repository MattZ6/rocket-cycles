import { ReactNode } from 'react'

import { ScreenStateRootStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ScreenStateRoot(props: Props) {
  return <Styles.Container {...props} />
}
