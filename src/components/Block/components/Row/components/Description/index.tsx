import { RowDescriptionStyles as Styles } from './styles'

type Props = {
  children: string
}

export function RowDescription(props: Props) {
  return <Styles.Description {...props} />
}
