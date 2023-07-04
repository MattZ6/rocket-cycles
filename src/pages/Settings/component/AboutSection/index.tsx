import { GithubLogo } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { app } from '@config/app'

import { Section } from '@components/Section'
import { Tooltip } from '@components/Tooltip'

import Avatar from '@assets/avatar.jpg'

import { AboutSectionStyles as Styles } from './styles'

export function AboutSection() {
  const { t } = useTranslation('settings')

  return (
    <Section.Root title={t('about.title')}>
      <Section.Row
        title={t('about.version.title')}
        description={t('about.version.description')}
      >
        <Styles.Version>v{app.version}</Styles.Version>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row
        title={t('about.repository.title')}
        description={t('about.repository.description')}
      >
        <Tooltip content={t('about.repository.link.tooltip')}>
          <Styles.ExternalLink href={app.github.url} target="_blank">
            <GithubLogo aria-hidden size={20} />
            ig-timer
          </Styles.ExternalLink>
        </Tooltip>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row
        title={t('about.commit.title')}
        description={t('about.commit.description')}
      >
        <Styles.CommitHash>{app.commitHash}</Styles.CommitHash>
      </Section.Row>

      <Section.Separator></Section.Separator>

      <Section.Row
        title={t('about.author.title')}
        description={app.author.name}
      >
        <Tooltip content={t('about.author.link.tooltip')}>
          <Styles.ExternalLink href={app.author.github.url} target="_blank">
            <Styles.Avatar loading="lazy" src={Avatar} alt="" />
            {app.author.github.user}
          </Styles.ExternalLink>
        </Tooltip>
      </Section.Row>
    </Section.Root>
  )
}
