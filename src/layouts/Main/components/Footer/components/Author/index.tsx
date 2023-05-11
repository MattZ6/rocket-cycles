import Avatar from '@assets/avatar.jpg'

import { AuthorStyles as Styles } from './styles'

export function Author() {
  return (
    <Styles.Text>
      Created by{' '}
      <Styles.Link href="https://github.com/MattZ6" target="_blank">
        <Styles.Avatar loading="lazy" src={Avatar} alt="" />
        Matheus Zanin
      </Styles.Link>
    </Styles.Text>
  )
}
