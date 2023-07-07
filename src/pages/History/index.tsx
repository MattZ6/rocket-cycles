import { PencilSimpleSlash } from '@phosphor-icons/react'
import { formatDistanceToNow } from 'date-fns'
import { ptBR, enUS } from 'date-fns/locale'
import { useTranslation } from 'react-i18next'

import { useCycles } from '@hooks/useCycles'

import { Block } from '@components/Block'
import { Page } from '@components/Page'
import { ScreenState } from '@components/ScreenState'

import { HistoryPageStyles as Styles } from './styles'

const LOCALE_OPTIONS = {
  'pt-BR': ptBR,
  us: enUS,
} as const

export default function HistoryPage() {
  const { t, i18n } = useTranslation('history')
  const { cycles } = useCycles()

  const hasCycles = !!cycles.length

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>{t('title')}</Page.Title>
      </Page.Header>

      <Page.Content>
        <Block.Root>
          <Block.Header>
            <Block.Title>{t('tasks.title')}</Block.Title>
            {hasCycles && (
              <Block.Badge>
                {t('tasks.cycle', { count: cycles.length })}
              </Block.Badge>
            )}
          </Block.Header>

          <Block.Content>
            {hasCycles && (
              <Styles.Table>
                <Styles.TableHead>
                  <tr>
                    <th>{t('tasks.description')}</th>
                    <th>{t('tasks.duration')}</th>
                    <th>{t('tasks.start')}</th>
                    <th>{t('tasks.status.title')}</th>
                  </tr>
                </Styles.TableHead>

                <Styles.TableBody>
                  {cycles.map((cycle) => (
                    <tr key={cycle.id}>
                      <td>{cycle.task}</td>
                      <td>
                        {t('tasks.minute', { count: cycle.minutesAmount })}
                      </td>
                      <td>
                        {formatDistanceToNow(new Date(cycle.startDate), {
                          addSuffix: true,
                          locale:
                            LOCALE_OPTIONS[
                              (i18n.language ??
                                'us') as keyof typeof LOCALE_OPTIONS
                            ],
                        })}
                      </td>
                      <td>
                        {cycle.finishedDate && (
                          <Styles.Status statusColor="success">
                            {t('tasks.status.done')}
                          </Styles.Status>
                        )}

                        {cycle.interruptedDate && (
                          <Styles.Status statusColor="failure">
                            {t('tasks.status.stopped')}
                          </Styles.Status>
                        )}

                        {!cycle.finishedDate && !cycle.interruptedDate && (
                          <Styles.Status statusColor="inProgress">
                            {t('tasks.status.in_progress')}
                          </Styles.Status>
                        )}
                      </td>
                    </tr>
                  ))}
                </Styles.TableBody>
              </Styles.Table>
            )}

            {!hasCycles && (
              <ScreenState.Root>
                <ScreenState.IconContainer>
                  <PencilSimpleSlash aria-hidden size={64} />
                </ScreenState.IconContainer>

                <ScreenState.Content>
                  <ScreenState.Title>
                    {t('tasks.empty.title')}
                  </ScreenState.Title>
                  <ScreenState.Description>
                    {t('tasks.empty.description')}
                  </ScreenState.Description>
                </ScreenState.Content>
              </ScreenState.Root>
            )}
          </Block.Content>
        </Block.Root>
      </Page.Content>
    </Page.Root>
  )
}
