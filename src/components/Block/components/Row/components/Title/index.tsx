import { RowTitleStyles as Styles } from './styles'

type Props = {
  children: string
}

export function RowTitle(props: Props) {
  return <Styles.Title {...props} />
}
