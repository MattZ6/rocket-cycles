import { CheckCircle, Sun, Moon, Monitor } from '@phosphor-icons/react'
import { memo, useCallback } from 'react'
import { useTranslation } from 'react-i18next'

import { ThemeContextTypes } from '@contexts/Theme/types'

import { OptionCardStyles as Styles } from './styles'

const themeLabel = {
  light: Sun,
  dark: Moon,
  system: Monitor,
} as const

type Props = {
  value: ThemeContextTypes.Theme
  selected?: boolean
  onSelect: (value: ThemeContextTypes.Theme) => void
}

function BaseOptionCard({ value, selected = false, onSelect }: Props) {
  const { t } = useTranslation('theme')

  const handleSelect = useCallback(() => onSelect(value), [onSelect, value])

  const Icon = themeLabel[value]

  return (
    <Styles.Button
      selected={!!selected}
      aria-selected={!!selected}
      onClick={handleSelect}
    >
      <Styles.ImageContainer />

      <Styles.Footer selected={!!selected}>
        <Icon aria-hidden size={18} />
        <Styles.Name>{t(value)}</Styles.Name>
        <Styles.IconContainer selected={!!selected}>
          <CheckCircle aria-hidden size={24} />
        </Styles.IconContainer>
      </Styles.Footer>
    </Styles.Button>
  )
}

export const OptionCard = memo(BaseOptionCard)
