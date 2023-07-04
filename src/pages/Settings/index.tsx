import { Page } from '@components/Page'

import { AboutSection, AppearanceSection } from './component'

export default function SettingsPage() {
  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>Settings</Page.Title>
      </Page.Header>

      <Page.Content>
        <AppearanceSection />

        <AboutSection />
      </Page.Content>
    </Page.Root>
  )
}
