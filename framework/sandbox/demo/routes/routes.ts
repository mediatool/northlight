import { Route } from '../../types'

export const routes: Route[] = [
  {
    path: '/',
    component: () => import('../pages/home/home-page'),
  },
  {
    path: '/campaigns',
    component: () => import('../pages/campaign/campaign-page'),
  },
  {
    path: '/settings',
    component: () => import('../pages/settings/settings-page'),
  },
]
