import { Suspense, useLayoutEffect } from 'react'
import { Outlet, useLocation } from 'react-router-dom'

import { ErrorBoundary } from '@components/ErrorBoundary'

import { Error, Loading } from './components'

export function Content() {
  const { pathname } = useLocation()

  useLayoutEffect(() => {
    setTimeout(() => window.scrollTo({ top: 0 }), 0)
  }, [pathname])

  return (
    <ErrorBoundary key={pathname} fallback={<Error />}>
      <Suspense fallback={<Loading />}>
        <Outlet />
      </Suspense>
    </ErrorBoundary>
  )
}
