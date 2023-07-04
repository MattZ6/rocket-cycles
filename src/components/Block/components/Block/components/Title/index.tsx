import { BlockTitleStyles as Styles } from './styles'

type Props = {
  children: string
}

export function BlockTitle(props: Props) {
  return <Styles.Title {...props} />
}
