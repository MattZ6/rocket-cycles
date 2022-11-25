import { Timer, Scroll } from 'phosphor-react'

import { Tooltip } from '@components/Tooltip'

import { LinksStyles as Styles } from './styles'

export function Links() {
  return (
    <Styles.Container>
      <Tooltip content="Timer" side="bottom">
        <Styles.Link to="/" aria-label="Go to timer page">
          <Timer aria-hidden size={24} />
        </Styles.Link>
      </Tooltip>

      <Tooltip content="History" side="bottom">
        <Styles.Link to="/history" aria-label="Go to history page">
          <Scroll aria-hidden size={24} />
        </Styles.Link>
      </Tooltip>
    </Styles.Container>
  )
}
