import { ReactNode } from 'react'
import { CyclesReducer } from 'reducers/cycles/reducer'

export namespace CyclesContextTypes {
  export type CreateCycleInput = {
    task: string
    minutesAmount: number
  }

  export type Context = {
    cycles: CyclesReducer.Cycle[]
    activeCycle: CyclesReducer.Cycle | undefined
    activeCycleId: string | null
    amountSecondsPassed: number
    markCurrentCycleAsFinished: () => void
    setSecondsPassed: (seconds: number) => void
    createNewCycle: (data: CreateCycleInput) => void
    interruptCurrentCycle: () => void
  }
}

export namespace CyclesProviderTypes {
  export type Props = {
    children: ReactNode
  }
}
