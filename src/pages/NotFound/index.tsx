import { ArrowArcLeft, Prohibit } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { NotFoundPageStyles as Styles } from './styles'

export default function NotFoundPage() {
  const { t } = useTranslation('not-found')

  return (
    <Styles.Container>
      <Prohibit size={96} weight="light" />
      <Styles.Title>{t('title')}</Styles.Title>
      <Styles.Message>{t('description')}</Styles.Message>

      <Styles.BackLink to="/">
        <ArrowArcLeft size={20} />
        {t('button')}
      </Styles.BackLink>
    </Styles.Container>
  )
}
