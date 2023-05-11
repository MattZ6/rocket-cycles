import { Timer, Scroll } from '@phosphor-icons/react'

import { Link } from './components'
import { LinksStyles as Styles } from './styles'

export function Links() {
  return (
    <Styles.Container>
      <Link icon={Timer} to="/">
        Timer
      </Link>
      <Link icon={Scroll} to="/history">
        History
      </Link>
    </Styles.Container>
  )
}
