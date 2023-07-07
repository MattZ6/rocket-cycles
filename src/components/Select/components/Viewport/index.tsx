import type { SelectViewportProps } from '@radix-ui/react-select'

import { SelectViewportStyles as Styles } from './styles'

type Props = SelectViewportProps

export function SelectViewport(props: Props) {
  return <Styles.Container {...props} />
}
