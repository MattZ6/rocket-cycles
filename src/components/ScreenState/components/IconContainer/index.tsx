import { ReactNode } from 'react'

import { ScreenStateIconContainerStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ScreenStateIconContainer(props: Props) {
  return <Styles.Container {...props} />
}
