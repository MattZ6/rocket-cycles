import { GearSix } from '@phosphor-icons/react'

import { SettingsLinkStyles as Styles } from './styles'

export function SettingsLink() {
  return (
    <Styles.Link to="/">
      <GearSix size={20} />
    </Styles.Link>
  )
}
