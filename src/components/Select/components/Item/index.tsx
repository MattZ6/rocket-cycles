import type { SelectItemProps } from '@radix-ui/react-select'

import { SelectItemStyles as Styles } from './styles'

type Props = SelectItemProps

export function SelectItem(props: Props) {
  return <Styles.Container {...props} />
}
