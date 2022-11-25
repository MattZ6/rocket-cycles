// import { useTheme } from '@hooks/useTheme'

import { ThemeSwitcher } from '@components/ThemeSwitcher'

import logo from '@assets/logo.svg'

import { Links } from './components'
import { HeaderStyles as Styles } from './styles'

export function Header() {
  // const { theme, selectTheme } = useTheme()

  return (
    <Styles.Container>
      <img src={logo} alt="" />

      <Links />

      <ThemeSwitcher />
      {/* <select
        name="theme-swicther"
        value={theme}
        onChange={(event) =>
          selectTheme(event.currentTarget.value as typeof theme)
        }
      >
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select> */}
    </Styles.Container>
  )
}
