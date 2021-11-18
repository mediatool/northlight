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
  {
    path: '/radio',
    component: () => import('../pages/radio-button-page'),
  },
  {
    path: '/switch',
    component: () => import('../pages/switch-page'),
  },
]
