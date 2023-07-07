import { Check } from '@phosphor-icons/react'
import type { SelectItemIndicatorProps } from '@radix-ui/react-select'

import { SelectItemIndicatorStyles as Styles } from './styles'

type Props = SelectItemIndicatorProps

export function SelectItemIndicator(props: Props) {
  return (
    <Styles.Container {...props}>
      <Check weight="bold" size={12} />
    </Styles.Container>
  )
}
