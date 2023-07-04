import { useTranslation } from 'react-i18next'

import { app } from '@config/app'

import Avatar from '@assets/avatar.jpg'

import { AuthorStyles as Styles } from './styles'

export function Author() {
  const { t } = useTranslation('common')
  return (
    <Styles.Text>
      {t('author.created_by')}{' '}
      <Styles.Link href={app.author.github.url} target="_blank">
        <Styles.Avatar loading="lazy" src={Avatar} alt="" />
        {app.author.name}
      </Styles.Link>
    </Styles.Text>
  )
}
