import { GithubLogo } from '@phosphor-icons/react'

import { app } from '@config/app'

import { SocialLinksStyles as Styles } from './styles'

export function SocialLinks() {
  return (
    <Styles.Navigation>
      <Styles.LinkButton href={app.github.url} target="_blank">
        <GithubLogo size={20} />
      </Styles.LinkButton>
    </Styles.Navigation>
  )
}
