import { Route } from '../../types'

export const routes: Route[] = [
  {
    path: '/',
    component: () => import('../pages/home/home-page'),
    exact: true,
  },
  {
    path: '/campaigns',
    component: () => import('../pages/campaign/campaign-page'),
    exact: true,
  },
  {
    path: '/settings',
    component: () => import('../pages/settings/settings-page'),
    exact: true,
  },
]
