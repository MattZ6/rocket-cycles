import { differenceInSeconds } from 'date-fns'
import { createContext, useReducer, useState } from 'react'

import { CyclesActions, CyclesReducer } from '@reducers/cycles'

import { CyclesContextTypes, CyclesProviderTypes } from './types'

const CyclesContext = createContext({} as CyclesContextTypes.Context)

function CyclesProvider({ children }: CyclesProviderTypes.Props) {
  const [state, dispatch] = useReducer(CyclesReducer.reducer, {
    cycles: [],
    activeCycleId: null,
  })

  const activeCycle = state.cycles.find(
    (cycle) => cycle.id === state.activeCycleId,
  )

  const [amountSecondsPassed, setAmountSecondsPassed] = useState(() => {
    if (activeCycle) {
      return differenceInSeconds(new Date(), new Date(activeCycle.startDate))
    }

    return 0
  })

  function setSecondsPassed(seconds: number) {
    setAmountSecondsPassed(seconds)
  }

  function markCurrentCycleAsFinished() {
    dispatch(CyclesActions.markCurrentCycleAsFinishedAction())
  }

  function createNewCycle(data: CyclesContextTypes.CreateCycleInput) {
    const id = String(new Date().getTime())

    dispatch(
      CyclesActions.addNewCycleAction({
        id,
        task: data.task,
        minutesAmount: data.minutesAmount,
        startDate: new Date(),
      }),
    )

    setAmountSecondsPassed(0)
  }

  function interruptCurrentCycle() {
    dispatch(CyclesActions.interruptCurrentCycleAction())
  }

  return (
    <CyclesContext.Provider
      value={{
        activeCycle,
        activeCycleId: state.activeCycleId,
        cycles: state.cycles,
        amountSecondsPassed,
        setSecondsPassed,
        markCurrentCycleAsFinished,
        createNewCycle,
        interruptCurrentCycle,
      }}
    >
      {children}
    </CyclesContext.Provider>
  )
}

export { CyclesContext, CyclesProvider }
