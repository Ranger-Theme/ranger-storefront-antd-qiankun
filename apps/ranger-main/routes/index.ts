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
        path: '/MES/CMS/*',
        component: lazy(() => import('@/pages/mes/cms')),
        children: []
      },
      {
        path: '/MES/I18N/*',
        component: lazy(() => import('@/pages/mes/i18n')),
        children: []
      },
      {
        path: '/MES/SEO/*',
        component: lazy(() => import('@/pages/mes/seo')),
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
