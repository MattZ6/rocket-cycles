import { useTheme } from '@hooks/useTheme'

import { Section } from '@components/Section'

import { OptionCard } from './components'
import { AppearanceSectionStyles as Styles } from './styles'

export function AppearanceSection() {
  const { options, theme, selectTheme } = useTheme()

  return (
    <Section.Root title="Appearance">
      <Section.Field
        title="Interface theme"
        description="Customize your workspace theme"
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
