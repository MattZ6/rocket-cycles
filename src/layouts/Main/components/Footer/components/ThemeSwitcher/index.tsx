import { Sun, Moon, Monitor } from '@phosphor-icons/react'

import { useTheme } from '@hooks/useTheme'

import { ThemeSwitcherStyles as Styles } from './styles'

export function ThemeSwitcher() {
  const { theme, selectTheme } = useTheme()

  return (
    <Styles.Container>
      <Styles.Button
        selected={theme === 'light'}
        onClick={() => selectTheme('light')}
      >
        <Sun />
      </Styles.Button>

      <Styles.Button
        selected={theme === 'dark'}
        onClick={() => selectTheme('dark')}
      >
        <Moon />
      </Styles.Button>

      <Styles.Button
        selected={theme === 'system'}
        onClick={() => selectTheme('system')}
      >
        <Monitor />
      </Styles.Button>
    </Styles.Container>
  )
}
