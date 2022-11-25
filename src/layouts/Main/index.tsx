import { Content, Header } from './components'
import { MainLayoutStyles as Styles } from './styles'

export function MainLayout() {
  return (
    <Styles.Wrapper>
      <Styles.Container>
        <Header />

        <Content />
      </Styles.Container>
    </Styles.Wrapper>
  )
}
