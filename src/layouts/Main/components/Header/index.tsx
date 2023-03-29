import { ThemeSwitcher } from '@components/ThemeSwitcher'

import logo from '@assets/logo.svg'

import { Links } from './components'
import { HeaderStyles as Styles } from './styles'

export function Header() {
  return (
    <Styles.Container>
      <img src={logo} alt="" />

      <Links />

      <ThemeSwitcher />
    </Styles.Container>
  )
}
