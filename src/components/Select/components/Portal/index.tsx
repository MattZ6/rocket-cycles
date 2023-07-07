import { Portal, PortalProps } from '@radix-ui/react-select'

type Props = PortalProps

export function SelectPortal(props: Props) {
  return <Portal {...props} />
}
