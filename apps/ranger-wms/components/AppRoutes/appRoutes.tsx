import { Suspense } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { ErrorBoundary, LazyComponent } from '@ranger-theme/admin'

import { routes } from '@/routes'

const rotuerViews = (routerItems: any[]) => {
  return routerItems && routerItems.length > 0 ? (
    <>
      {routerItems.map(({ path, component: Component, children, redirect }) => {
        return children && children.length ? (
          <Route path={path} key={path} element={<LazyComponent element={<Component />} />}>
            {rotuerViews(children)}
            <Route path={path} element={<Navigate to={redirect || children[0].path} />} />
          </Route>
        ) : (
          <Route key={path} path={path} element={<LazyComponent element={<Component />} />} />
        )
      })}
    </>
  ) : null
}

const AppRoutes = () => {
  return (
    <Suspense>
      <ErrorBoundary>
        <Routes>{rotuerViews(routes)}</Routes>
      </ErrorBoundary>
    </Suspense>
  )
}

export default AppRoutes
