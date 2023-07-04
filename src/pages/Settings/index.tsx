import { useTranslation } from 'react-i18next'

import { Page } from '@components/Page'

import { AboutSection, AppearanceSection } from './component'

export default function SettingsPage() {
  const { t } = useTranslation('settings')

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>{t('title')}</Page.Title>
      </Page.Header>

      <Page.Content>
        <AppearanceSection />

        <AboutSection />
      </Page.Content>
    </Page.Root>
  )
}
