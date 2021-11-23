import { Route } from '../types'

export const routes: Route[] = [
  {
    path: '/button',
    component: () => import('../pages/button-page'),
  },
  {
    path: '/simple-textfield',
    component: () => import('../pages/simple-textfield-page'),
  },
  {
    path: '/radio',
    component: () => import('../pages/radio-button-page'),
  },
  {
    path: '/switch',
    component: () => import('../pages/switch-page'),
  },
  {
    path: '/icon',
    component: () => import('../pages/icon-page'),
  },
  {
    path: '/form',
    component: () => import('../pages/form-page'),
  },
]
