import { ReactNode } from 'react'

import { ScreenStateContentStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ScreenStateContent(props: Props) {
  return <Styles.Container {...props} />
}
