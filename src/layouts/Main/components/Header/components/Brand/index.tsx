import { app } from '@config/app'

import logo from '@assets/logo.svg'

import { BrandStyles as Styles } from './styles'

export function Brand() {
  return (
    <Styles.Container>
      <img src={logo} alt="" />

      <Styles.Title>{app.name}</Styles.Title>
    </Styles.Container>
  )
}
