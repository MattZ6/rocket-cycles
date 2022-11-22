import { TooltipContentProps } from '@radix-ui/react-tooltip'
import { ReactNode } from 'react'

import { TooltipStyles as Styles } from './styles'

type Props = {
  children: ReactNode
  content: string
} & TooltipContentProps

export function Tooltip({ children, content, ...rest }: Props) {
  return (
    <Styles.Provider>
      <Styles.Tooltip>
        <Styles.Trigger asChild>{children}</Styles.Trigger>

        <Styles.Portal>
          <Styles.Content {...rest}>
            {content}

            <Styles.Arrow />
          </Styles.Content>
        </Styles.Portal>
      </Styles.Tooltip>
    </Styles.Provider>
  )
}
