import { Icon } from '@phosphor-icons/react'
import { NavLinkProps } from 'react-router-dom'

import { LinkStyles as Styles } from './styles'

type Props = NavLinkProps & {
  icon: Icon
  children: string
}

export function Link({ children, icon: Icon, ...props }: Props) {
  return (
    <Styles.Link {...props}>
      <Icon size={16} />
      <Styles.Label>{children}</Styles.Label>
    </Styles.Link>
  )
}
