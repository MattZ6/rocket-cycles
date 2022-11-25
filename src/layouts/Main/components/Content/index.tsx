import { Suspense } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { ErrorBoundary } from '@components/ErrorBoundary'

import { Error, Loading } from './components'

export function Content() {
  const { pathname } = useLocation()

  return (
    <ErrorBoundary key={pathname} fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}
