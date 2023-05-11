import { SocialLinks, Author } from './components'
import { FooterStyles as Styles } from './styles'

export function Footer() {
  return (
    <Styles.Footer>
      <Styles.Content>
        <SocialLinks />

        <Author />

        <span />
      </Styles.Content>
    </Styles.Footer>
  )
}
