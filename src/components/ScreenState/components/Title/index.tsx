import { ReactNode } from 'react'

import { ScreenStateTitleStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ScreenStateTitle(props: Props) {
  return <Styles.Title {...props} />
}
