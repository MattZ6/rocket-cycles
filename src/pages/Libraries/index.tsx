import { GithubLogo } from '@phosphor-icons/react'
import { Fragment } from 'react'
import { useTranslation } from 'react-i18next'

import { Block, BlockRow } from '@components/Block'
import { Page } from '@components/Page'

import licensesJson from './licenses.json'
import { LibrariesPageStyles as Styles } from './styles'

type Lib = (typeof licensesJson)['@commitlint/cli@17.6.6']

function extractData() {
  return Object.keys(licensesJson).map((key) => {
    const _key = String(key)

    const separatorIndex = _key.lastIndexOf('@')

    const name = _key.substring(0, separatorIndex)
    const version = _key.substring(separatorIndex + 1)

    const lib = licensesJson[_key as keyof typeof licensesJson] as Lib

    return {
      name,
      version,
      license: lib.licenses,
      repository: lib.repository,
    }
  })
}

const libraries = extractData()

export default function LibrariesPage() {
  const { t } = useTranslation('licenses')

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>{t('title')}</Page.Title>
        <Page.Description>{t('description')}</Page.Description>
      </Page.Header>

      <Page.Content>
        <Block.Root>
          <Block.Header>
            <Block.Title>{t('libraries.title')}</Block.Title>
            <Block.Badge>{libraries.length} libs</Block.Badge>
          </Block.Header>

          <Block.Content withPadding>
            {libraries.map((lib, index) => {
              return (
                <Fragment key={lib.name}>
                  <BlockRow.Root>
                    <BlockRow.Content>
                      <BlockRow.Title>
                        {lib.name}
                        <Styles.Version>v{lib.version}</Styles.Version>
                      </BlockRow.Title>
                      <BlockRow.Description>
                        {t('libraries.license', { lib: lib.license })}
                      </BlockRow.Description>
                    </BlockRow.Content>

                    {lib.repository && (
                      <Styles.GitHubLink
                        href={lib.repository}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <GithubLogo aria-hidden size={18} />
                        {t('libraries.repository.title')}
                      </Styles.GitHubLink>
                    )}
                  </BlockRow.Root>

                  {index < libraries.length - 1 && <Block.Separator />}
                </Fragment>
              )
            })}
          </Block.Content>
        </Block.Root>
      </Page.Content>
    </Page.Root>
  )
}
