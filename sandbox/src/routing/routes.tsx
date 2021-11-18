import { Route } from '../types'

export const routes: Route[] = [
  {
    path: '/button',
    component: () => import('../pages/button-page'),
  },
  {
    path: '/input',
    component: () => import('../pages/input-page'),
  },
]
