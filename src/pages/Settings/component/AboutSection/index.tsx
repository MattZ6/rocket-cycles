import { GithubLogo, ArrowUpRight, Scroll } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { app } from '@config/app'

import { Block, BlockRow } from '@components/Block'
import { Tooltip } from '@components/Tooltip'

import Avatar from '@assets/avatar.jpg'

import { AboutSectionStyles as Styles } from './styles'

export function AboutSection() {
  const { t } = useTranslation('settings')

  return (
    <Block.Root>
      <Block.Header>
        <Block.Title>{t('about.title')}</Block.Title>
      </Block.Header>

      <Block.Content withPadding>
        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('about.version.title')}</BlockRow.Title>
            <BlockRow.Description>
              {t('about.version.description')}
            </BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <Tooltip content={t('about.version.link.tooltip')}>
              <Styles.ExternalLink
                href={`${app.github.url}/releases/tag/v${app.version}`}
                target="_blank"
              >
                <Scroll aria-hidden size={16} />
                <Styles.Version>v{app.version}</Styles.Version>
              </Styles.ExternalLink>
            </Tooltip>
          </BlockRow.Right>
        </BlockRow.Root>

        <Block.Separator />

        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('about.repository.title')}</BlockRow.Title>
            <BlockRow.Description>
              {t('about.repository.description')}
            </BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <Tooltip content={t('about.repository.link.tooltip')}>
              <Styles.ExternalLink href={app.github.url} target="_blank">
                <GithubLogo aria-hidden size={20} />
                {app.github.name}
              </Styles.ExternalLink>
            </Tooltip>
          </BlockRow.Right>
        </BlockRow.Root>

        <Block.Separator />

        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('about.commit.title')}</BlockRow.Title>
            <BlockRow.Description>
              {t('about.commit.description')}
            </BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <Styles.CommitHash>{app.commitHash}</Styles.CommitHash>
          </BlockRow.Right>
        </BlockRow.Root>

        <Block.Separator />

        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('about.author.title')}</BlockRow.Title>
            <BlockRow.Description>{app.author.name}</BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <Tooltip content={t('about.author.link.tooltip')}>
              <Styles.ExternalLink href={app.author.github.url} target="_blank">
                <Styles.Avatar loading="lazy" src={Avatar} alt="" />
                {app.author.github.user}
              </Styles.ExternalLink>
            </Tooltip>
          </BlockRow.Right>
        </BlockRow.Root>

        <Block.Separator />

        <BlockRow.Root>
          <BlockRow.Content>
            <BlockRow.Title>{t('about.license.title')}</BlockRow.Title>
            <BlockRow.Description>
              {t('about.license.description')}
            </BlockRow.Description>
          </BlockRow.Content>

          <BlockRow.Right>
            <Styles.InternalLink to="/libraries">
              {t('about.license.link.title')}
              <ArrowUpRight aria-hidden size={16} />
            </Styles.InternalLink>
          </BlockRow.Right>
        </BlockRow.Root>
      </Block.Content>
    </Block.Root>
  )
}
