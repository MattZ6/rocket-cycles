import { Content, Footer, Header } from './components'
import { MainLayoutStyles as Styles } from './styles'

export function MainLayout() {
  return (
    <Styles.Wrapper>
      <Header />

      <Content />

      <Footer />
    </Styles.Wrapper>
  )
}
