import { Route } from '../types'

export const routes: Route[] = [
  {
    path: '/button',
    component: () => import('../pages/button-page'),
  },
]
