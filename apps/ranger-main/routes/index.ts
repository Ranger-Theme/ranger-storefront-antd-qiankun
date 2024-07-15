import { LazyExoticComponent, lazy } from 'react'

interface Routes {
  path: string
  redirect?: string
  component: LazyExoticComponent<any>
  children: Routes[]
}

export const routes: Routes[] = [
  {
    path: '/',
    component: lazy(() => import('@/components/PageLayout')),
    children: [
      {
        path: '/',
        component: lazy(() => import('@/pages/home')),
        children: []
      },
      {
        path: '/oim/srm/*',
        component: lazy(() => import('@/pages/oim/srm')),
        children: []
      },
      {
        path: '/oim/qms/*',
        component: lazy(() => import('@/pages/oim/qms')),
        children: []
      },
      {
        path: '/oim/wms/*',
        component: lazy(() => import('@/pages/oim/wms')),
        children: []
      },
      {
        path: '*',
        component: lazy(() => import('@/pages/not-found')),
        children: []
      }
    ]
  },
  {
    path: '/login',
    component: lazy(() => import('@/pages/login')),
    children: []
  }
]
