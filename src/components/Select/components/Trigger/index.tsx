import type { SelectTriggerProps } from '@radix-ui/react-select'

import { SelectTriggerStyles as Styles } from './styles'

type Props = SelectTriggerProps

export function SelectTrigger(props: Props) {
  return <Styles.Button {...props} />
}
