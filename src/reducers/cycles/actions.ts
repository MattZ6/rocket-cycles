import { CyclesReducer } from './reducer'

export namespace CyclesActions {
  export function addNewCycleAction(
    newCycle: CyclesReducer.AddNewCycleAction['payload']['newCycle'],
  ): CyclesReducer.AddNewCycleAction {
    return {
      type: 'add_new_cycle',
      payload: {
        newCycle,
      },
    }
  }

  export function markCurrentCycleAsFinishedAction(): CyclesReducer.MarkCurrentCycleAsFinishedAction {
    return {
      type: 'mark_current_cycle_as_finished',
    }
  }

  export function interruptCurrentCycleAction(): CyclesReducer.InterruptCurrentCycleAction {
    return {
      type: 'interrupt_current_cycle',
    }
  }
}
