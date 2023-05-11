import { GithubLogo } from '@phosphor-icons/react'

import { SocialLinksStyles as Styles } from './styles'

export function SocialLinks() {
  return (
    <Styles.Navigation>
      <Styles.LinkButton
        href="https://github.com/MattZ6/ig-timer"
        target="_blank"
      >
        <GithubLogo size={20} />
      </Styles.LinkButton>
    </Styles.Navigation>
  )
}
