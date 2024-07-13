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
    component: lazy(() => import('@/components/HomePage')),
    children: [
      {
        path: '/',
        component: lazy(() => import('@/pages/home')),
        children: []
      },
      {
        path: '/setting/qualityPlan',
        component: lazy(() => import('@/pages/setting/qualityPlan')),
        children: []
      },
      {
        path: '/setting/checktools',
        component: lazy(() => import('@/pages/setting/checktools')),
        children: []
      },
      {
        path: '/setting/samplePrograme',
        component: lazy(() => import('@/pages/setting/samplePrograme')),
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
