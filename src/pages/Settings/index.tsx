import { Page } from '@components/Page'

import { AboutSection, AppearanceSection } from './component'

export default function SettingsPage() {
  return (
    <Page title="Settings">
      <AppearanceSection />

      <AboutSection />
    </Page>
  )
}
