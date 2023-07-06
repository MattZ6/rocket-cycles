import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

import { MainLayout } from '@layouts/Main'

const HomePage = lazy(() => import('@pages/Home'))
const HistoryPage = lazy(() => import('@pages/History'))
const SettingsPage = lazy(() => import('@pages/Settings'))
const NotFoundPage = lazy(() => import('@pages/NotFound'))
const LibrariesPagePage = lazy(() => import('@pages/Libraries'))

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/history" element={<HistoryPage />} />
        <Route path="/settings" element={<SettingsPage />} />
        <Route path="/libraries" element={<LibrariesPagePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  )
}
