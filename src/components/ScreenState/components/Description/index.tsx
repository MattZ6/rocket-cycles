import { ReactNode } from 'react'

import { ScreenStateDescriptionStyles as Styles } from './styles'

type Props = {
  children: ReactNode
}

export function ScreenStateDescription(props: Props) {
  return <Styles.Description {...props} />
}
