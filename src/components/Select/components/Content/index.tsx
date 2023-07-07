import type { SelectContentProps } from '@radix-ui/react-select'

import { SelectContentStyles as Styles } from './styles'

type Props = SelectContentProps

export function SelectContent(props: Props) {
  return <Styles.Container {...props} />
}
