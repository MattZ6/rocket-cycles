import { ThemeProvider } from "./contexts/Theme"
import { globalStyles } from "./styles/stitches.config"

globalStyles()

export function App() {
  return (
    <ThemeProvider>
      <h1>Ignite Timer</h1>
    </ThemeProvider>
  )
}
