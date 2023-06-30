import { GithubLogo } from '@phosphor-icons/react'

import { app } from '@config/app'

import { Section } from '@components/Section'
import { Tooltip } from '@components/Tooltip'

import Avatar from '@assets/avatar.jpg'

import { AboutSectionStyles as Styles } from './styles'

export function AboutSection() {
  return (
    <Section.Root title="About">
      <Section.Row title="Version" description="Useful for debug purposes">
        <Styles.Version>v{app.version}</Styles.Version>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row title="Repository" description="Project page on GitHub">
        <Tooltip content="View on GitHub">
          <Styles.ExternalLink href={app.github.url} target="_blank">
            <GithubLogo aria-hidden size={20} />
            ig-timer
          </Styles.ExternalLink>
        </Tooltip>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row
        title="Commit hash"
        description="SHA from commit that generates the build"
      >
        <Styles.CommitHash>{app.commitHash}</Styles.CommitHash>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row title="Created by" description={app.author.name}>
        <Tooltip content="View on GitHub">
          <Styles.ExternalLink href={app.author.github.url} target="_blank">
            <Styles.Avatar loading="lazy" src={Avatar} alt="" />
            {app.author.github.user}
          </Styles.ExternalLink>
        </Tooltip>
      </Section.Row>
    </Section.Root>
  )
}
