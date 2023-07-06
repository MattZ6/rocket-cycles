import { ReactNode } from 'react'
import { BrowserRouter } from 'react-router-dom'

import { CyclesProvider } from './Cycles'
import { ThemeProvider } from './Theme'

type Props = {
  children: ReactNode
}

export function Provider({ children }: Props) {
  return (
    <ThemeProvider>
      <CyclesProvider>
        <BrowserRouter>{children}</BrowserRouter>
      </CyclesProvider>
    </ThemeProvider>
  )
}
