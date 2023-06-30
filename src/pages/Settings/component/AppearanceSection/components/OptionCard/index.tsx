import { CheckCircle, Sun, Moon, Monitor } from '@phosphor-icons/react'
import { memo, useCallback } from 'react'

import { ThemeContextTypes } from '@contexts/Theme/types'

import { OptionCardStyles as Styles } from './styles'

const themeLabel = {
  light: {
    title: 'Light',
    icon: Sun,
  },
  dark: {
    title: 'Dark',
    icon: Moon,
  },
  system: {
    title: 'System (default)',
    icon: Monitor,
  },
} as const

type Props = {
  value: ThemeContextTypes.Theme
  selected?: boolean
  // label: string
  onSelect: (value: ThemeContextTypes.Theme) => void
}

function BaseOptionCard({ value, selected = false, onSelect }: Props) {
  const handleSelect = useCallback(() => onSelect(value), [onSelect, value])

  const Icon = themeLabel[value].icon

  return (
    <Styles.Button
      selected={!!selected}
      aria-selected={!!selected}
      onClick={handleSelect}
    >
      <Styles.ImageContainer></Styles.ImageContainer>

      <Styles.Footer selected={!!selected}>
        <Icon aria-hidden size={18} />
        <Styles.Name>{themeLabel[value].title}</Styles.Name>
        <Styles.IconContainer selected={!!selected}>
          <CheckCircle aria-hidden size={24} />
        </Styles.IconContainer>
      </Styles.Footer>
    </Styles.Button>
  )
}

export const OptionCard = memo(BaseOptionCard)
