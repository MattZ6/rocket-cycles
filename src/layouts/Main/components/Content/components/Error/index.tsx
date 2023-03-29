import { ArrowClockwise, SmileyXEyes } from '@phosphor-icons/react'

import { ErrorStyles as Styles } from './styles'

export function Error() {
  return (
    <Styles.Container>
      <SmileyXEyes size={96} weight="light" />
      <Styles.Title>Ooh... Something went wrong!</Styles.Title>
      <Styles.Message>
        We&rsquo;re currently investigating the problem.
        <br />
        You can also refresh the page to try again.
      </Styles.Message>

      <Styles.RetryButton onClick={() => window.location.reload()}>
        <ArrowClockwise size={20} weight="light" />
        Refresh the page
      </Styles.RetryButton>
    </Styles.Container>
  )
}
