import { GearSix } from '@phosphor-icons/react'
import { useTranslation } from 'react-i18next'

import { Tooltip } from '@components/Tooltip'

import { SettingsLinkStyles as Styles } from './styles'

export function SettingsLink() {
  const { t } = useTranslation('common')

  return (
    <Tooltip content={t('links.settings')}>
      <Styles.Link to="/settings">
        <GearSix size={20} />
      </Styles.Link>
    </Tooltip>
  )
}
