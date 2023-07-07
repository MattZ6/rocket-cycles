import { CaretDown } from '@phosphor-icons/react'
import { Icon, SelectIconProps } from '@radix-ui/react-select'

type Props = SelectIconProps

export function SelectIcon(props: Props) {
  return (
    <Icon {...props}>
      <CaretDown weight="bold" size={12} />
    </Icon>
  )
}
