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
        path: '/base/location',
        component: lazy(() => import('@/pages/base/location')),
        children: []
      },
      {
        path: '/stock/local',
        component: lazy(() => import('@/pages/stock/local')),
        children: []
      },
      {
        path: '/stock/inven',
        component: lazy(() => import('@/pages/stock/inven')),
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
  },
  {
    path: '*',
    component: lazy(() => import('@/pages/not-found')),
    children: []
  }
]
