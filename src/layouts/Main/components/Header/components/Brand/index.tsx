import logo from '@assets/logo.svg'

import { BrandStyles as Styles } from './styles'

export function Brand() {
  return (
    <Styles.Container>
      <img src={logo} alt="" />

      <Styles.Title>Ignite Timer</Styles.Title>
    </Styles.Container>
  )
}
