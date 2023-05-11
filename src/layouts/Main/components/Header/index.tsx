import { Brand, Links } from './components'
import { HeaderStyles as Styles } from './styles'

export function Header() {
  return (
    <Styles.Header>
      <Styles.Content>
        <Brand />

        <Links />
      </Styles.Content>
    </Styles.Header>
  )
}
