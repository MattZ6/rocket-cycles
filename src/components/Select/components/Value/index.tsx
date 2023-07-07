import { Value, SelectValueProps } from '@radix-ui/react-select'

type Props = SelectValueProps

export function SelectValue(props: Props) {
  return <Value {...props} />
}
