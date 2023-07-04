import { FieldTitleStyles as Styles } from './styles'

type Props = {
  children: string
}

export function FieldTitle(props: Props) {
  return <Styles.Title {...props} />
}
