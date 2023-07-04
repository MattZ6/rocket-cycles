import { FieldDescriptionStyles as Styles } from './styles'

type Props = {
  children: string
}

export function FieldDescription(props: Props) {
  return <Styles.Description {...props} />
}
