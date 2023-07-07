import { useTranslation } from 'react-i18next'

import { Select } from '@components/Select'

const OPTIONS = [
  { key: 'en', label: 'English' },
  { key: 'pt-BR', label: 'Português (Brasileiro)' },
]

export function LanguageSelect() {
  const { t, i18n } = useTranslation('settings')

  return (
    <Select.Root value={i18n.language} onValueChange={i18n.changeLanguage}>
      <Select.Trigger aria-label={t('appearance.locale.select-placeholder')}>
        <Select.Value placeholder={t('appearance.locale.select-placeholder')} />
        <Select.Icon />
      </Select.Trigger>

      <Select.Portal>
        <Select.Content>
          <Select.Viewport>
            {OPTIONS.map((option) => (
              <Select.Item key={option.key} value={option.key}>
                <Select.ItemIndicator />
                <Select.ItemText>{option.label}</Select.ItemText>
              </Select.Item>
            ))}
          </Select.Viewport>
        </Select.Content>
      </Select.Portal>
    </Select.Root>
  )
}
