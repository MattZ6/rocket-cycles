import { useContext } from 'react'

import { CyclesContext } from '@contexts/Cycles'

export function useCycles() {
  return useContext(CyclesContext)
}
