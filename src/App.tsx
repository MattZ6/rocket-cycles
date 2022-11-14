import { Provider } from '@contexts/Provider'

import { globalStyles } from '@styles/stitches.config'

globalStyles()

export function App() {
  return (
    <Provider>
      <h1>Ignite Timer</h1>
    </Provider>
  )
}
