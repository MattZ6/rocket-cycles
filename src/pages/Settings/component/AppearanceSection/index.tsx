import { useTranslation } from 'react-i18next'

import { useTheme } from '@hooks/useTheme'

import { Block, BlockField, BlockRow } from '@components/Block'

import { LanguageSelect, OptionCard } from './components'
import { AppearanceSectionStyles as Styles } from './styles'

export function AppearanceSection() {
  const { t } = useTranslation('settings')
  const { options, theme, selectTheme } = useTheme()

  return (
    <Block.Root>
      <Block.Header>
        <Block.Title>{t('appearance.title')}</Block.Title>
      </Block.Header>

      <Block.Content withPadding>
        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('appearance.locale.title')}</BlockRow.Title>
            <BlockRow.Description>
              {t('appearance.locale.description')}
            </BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <LanguageSelect />
          </BlockRow.Right>
        </BlockRow.Root>

        <Block.Separator />

        <BlockField.Root>
          <BlockField.Header>
            <BlockField.Title>{t('appearance.theme.title')}</BlockField.Title>
            <BlockField.Description>
              {t('appearance.theme.description')}
            </BlockField.Description>
          </BlockField.Header>

          <BlockField.Content>
            <Styles.ThemesList role="list">
              {options.map((option) => (
                <OptionCard
                  key={option}
                  value={option}
                  selected={option === theme}
                  onSelect={selectTheme}
                />
              ))}
            </Styles.ThemesList>
          </BlockField.Content>
        </BlockField.Root>
      </Block.Content>
    </Block.Root>
  )
}
