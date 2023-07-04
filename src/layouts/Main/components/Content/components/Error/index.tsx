import { ArrowClockwise, SmileyXEyes } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { ErrorStyles as Styles } from './styles'

export function Error() {
  const { t } = useTranslation('error')

  return (
    <Styles.Container>
      <SmileyXEyes size={96} weight="light" />
      <Styles.Title>{t('title')}</Styles.Title>
      <Styles.Message>
        {t('description.first_line')}
        <br />
        {t('description.second_line')}
      </Styles.Message>

      <Styles.RetryButton onClick={() => window.location.reload()}>
        <ArrowClockwise size={20} weight="light" />
        {t('button')}
      </Styles.RetryButton>
    </Styles.Container>
  )
}
