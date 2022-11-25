import { SelectItemProps } from '@radix-ui/react-select'
import { AppWindow, Check, Moon, Sun } from 'phosphor-react'

import { useTheme } from '@hooks/useTheme'

import { ThemeSwitcherStyles as Styles } from './styles'

type Props = SelectItemProps

function Option(props: Props) {
  return (
    <Styles.Item {...props}>
      <Styles.ItemText>{props.textValue}</Styles.ItemText>
      <Styles.ItemIndicator>
        <Check size={16} weight="bold" />
      </Styles.ItemIndicator>
    </Styles.Item>
  )
}

const ICONS = {
  light: Sun,
  dark: Moon,
  system: AppWindow,
}

export function ThemeSwitcher() {
  const { theme, selectTheme } = useTheme()

  const Icon = ICONS[theme]

  return (
    <Styles.Root value={theme} onValueChange={selectTheme}>
      <Styles.Trigger aria-label="Application theme">
        <Styles.Value placeholder="Select a theme" />
        <Styles.Icon>
          <Icon size={16} />
        </Styles.Icon>
      </Styles.Trigger>

      <Styles.Portal>
        <Styles.Content>
          <Styles.Viewport>
            <Option value="light" textValue="Light" />
            <Option value="dark" textValue="Dark" />
            <Option value="system" textValue="System" />
          </Styles.Viewport>
        </Styles.Content>
      </Styles.Portal>
    </Styles.Root>
  )
}
