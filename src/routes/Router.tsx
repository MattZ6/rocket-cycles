import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

const HomePage = lazy(() => import('@pages/Home'))
const HistoryPage = lazy(() => import('@pages/History'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
