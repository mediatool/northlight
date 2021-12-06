import { Route } from '../../types'

export const routes: Route[] = [
  {
    path: '/button',
    component: () => import('../pages/button-page'),
    exact: true,
  },
  {
    path: '/simple-textfield',
    component: () => import('../pages/simple-textfield-page'),
    exact: true,
  },
  {
    path: '/radio',
    component: () => import('../pages/radio-button-page'),
    exact: true,
  },
  {
    path: '/switch',
    component: () => import('../pages/switch-page'),
    exact: true,
  },
  {
    path: '/icon',
    component: () => import('../pages/icon-page'),
    exact: true,
  },
  {
    path: '/form',
    component: () => import('../pages/form-page'),
    exact: true,
  },
  {
    path: '/breadcrumbs',
    component: () => import('../pages/breadcrumbs-page'),
    exact: true,
  },
  {
    path: '/tag',
    component: () => import('../pages/tag-page'),
    exact: true,
  },
]
