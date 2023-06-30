import { Brand, Links, RightActions } from './components'
import { HeaderStyles as Styles } from './styles'

export function Header() {
  return (
    <Styles.Header>
      <Styles.Content>
        <Brand />

        <Links />

        <RightActions />
      </Styles.Content>
    </Styles.Header>
  )
}
