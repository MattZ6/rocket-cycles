import { SocialLinks, Author, ThemeSwitcher } from './components'
import { FooterStyles as Styles } from './styles'

export function Footer() {
  return (
    <Styles.Footer>
      <Styles.Content>
        <SocialLinks />

        <Author />

        <ThemeSwitcher />
      </Styles.Content>
    </Styles.Footer>
  )
}
