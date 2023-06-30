import { GearSix } from '@phosphor-icons/react'

import { Tooltip } from '@components/Tooltip'

import { SettingsLinkStyles as Styles } from './styles'

export function SettingsLink() {
  return (
    <Tooltip content="Settings">
      <Styles.Link to="/settings">
        <GearSix size={20} />
      </Styles.Link>
    </Tooltip>
  )
}
