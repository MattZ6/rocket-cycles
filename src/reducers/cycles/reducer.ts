import { produce } from 'immer'

export namespace CyclesReducer {
  export type Cycle = {
    id: string
    task: string
    minutesAmount: number
    startDate: Date
    interruptedDate?: Date
    finishedDate?: Date
  }

  type State = {
    cycles: Cycle[]
    activeCycleId: string | null
  }

  export type AddNewCycleAction = {
    type: 'add_new_cycle'
    payload: {
      newCycle: Cycle
    }
  }

  export type InterruptCurrentCycleAction = {
    type: 'interrupt_current_cycle'
  }

  export type MarkCurrentCycleAsFinishedAction = {
    type: 'mark_current_cycle_as_finished'
  }

  type Action =
    | AddNewCycleAction
    | InterruptCurrentCycleAction
    | MarkCurrentCycleAsFinishedAction

  export function reducer(state: State, action: Action): State {
    switch (action.type) {
      case 'add_new_cycle':
        return produce(state, (draft) => {
          draft.cycles.push(action.payload.newCycle)
          draft.activeCycleId = action.payload.newCycle.id
        })

      case 'interrupt_current_cycle': {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })

        if (currentCycleIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].interruptedDate = new Date()
        })
      }

      case 'mark_current_cycle_as_finished': {
        const currentCycleIndex = state.cycles.findIndex((cycle) => {
          return cycle.id === state.activeCycleId
        })

        if (currentCycleIndex < 0) {
          return state
        }

        return produce(state, (draft) => {
          draft.activeCycleId = null
          draft.cycles[currentCycleIndex].finishedDate = new Date()
        })
      }

      default:
        return state
    }
  }
}
