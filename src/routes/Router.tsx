import { lazy } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

const HomePage = lazy(() => import('@pages/Home'))
const HistoryPage = lazy(() => import('@pages/History'))
const SettingsPage = lazy(() => import('@pages/Settings'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
