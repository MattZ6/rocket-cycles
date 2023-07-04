import { useTranslation } from 'react-i18next'

import { useTheme } from '@hooks/useTheme'

import { Section } from '@components/Section'

import { OptionCard } from './components'
import { AppearanceSectionStyles as Styles } from './styles'

export function AppearanceSection() {
  const { t } = useTranslation('settings')
  const { options, theme, selectTheme } = useTheme()

  return (
    <Section.Root title={t('appearance.title')}>
      {/* <Section.Row
        title={t('appearance.locale.title')}
        description={t('appearance.locale.description')}
      >
      </Section.Row> */}

      {/* <Section.Separator></Section.Separator> */}

      <Section.Field
        title={t('appearance.theme.title')}
        description={t('appearance.theme.description')}
      >
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
      </Section.Field>

      {/* <Section.Separator></Section.Separator> */}

      {/* <Section.Row
        title="Fixed header"
        description="Turn header aways visible on top of page"
      >
        <input type="checkbox" />
      </Section.Row> */}
    </Section.Root>
  )
}
