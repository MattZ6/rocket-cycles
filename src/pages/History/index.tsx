import { useTranslation } from 'react-i18next'

import { Page } from '@components/Page'
import { Section } from '@components/Section'

import { HistoryPageStyles as Styles } from './styles'

export default function HistoryPage() {
  const { t } = useTranslation('history')

  return (
    <Page.Root>
      <Page.Header>
        <Page.Title>{t('title')}</Page.Title>
      </Page.Header>

      <Page.Content>
        <Section.Root title={t('tasks.title')} withoutInternalPadding>
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
              <tr>
                <td>Project #1</td>
                <td>20 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="success">
                    {t('tasks.status.done')}
                  </Styles.Status>
                </td>
              </tr>

              <tr>
                <td>Project #2</td>
                <td>15 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="failure">
                    {t('tasks.status.stopped')}
                  </Styles.Status>
                </td>
              </tr>

              <tr>
                <td>Project #3</td>
                <td>25 minutes</td>
                <td>2 days ago</td>
                <td>
                  <Styles.Status statusColor="inProgress">
                    {t('tasks.status.in_progress')}
                  </Styles.Status>
                </td>
              </tr>
            </Styles.TableBody>
          </Styles.Table>
        </Section.Root>
      </Page.Content>
    </Page.Root>
  )
}
