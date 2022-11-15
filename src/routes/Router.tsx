import { Route, Routes } from 'react-router-dom'

import { HistoryPage } from '@pages/History'
import { HomePage } from '@pages/Home'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/history" element={<HistoryPage />} />
    </Routes>
  )
}
