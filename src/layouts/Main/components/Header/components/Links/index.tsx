import { Timer, Scroll } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { Link } from './components'
import { LinksStyles as Styles } from './styles'

export function Links() {
  const { t } = useTranslation('common')

  return (
    <Styles.Container>
      <Link icon={Timer} to="/">
        {t('links.timer')}
      </Link>
      <Link icon={Scroll} to="/history">
        {t('links.history')}
      </Link>
    </Styles.Container>
  )
}
