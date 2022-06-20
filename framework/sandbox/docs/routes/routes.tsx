import { Route } from '../../types'

export const routes: Route[] = [
  {
    path: '/plain-text-input',
    component: () => import('../pages/plain-text-input'),
    exact: true,
  },
  {
    path: '/badge',
    component: () => import('../pages/badge-page'),
    exact: true,
  },
  {
    path: '/breadcrumbs',
    component: () => import('../pages/breadcrumbs-page'),
    exact: true,
  },
  {
    path: '/button',
    component: () => import('../pages/button-page'),
    exact: true,
  },
  {
    path: '/card',
    component: () => import('../pages/card-page'),
    exact: true,
  },
  {
    path: '/checkbox',
    component: () => import('../pages/checkbox-page'),
    exact: true,
  },
  {
    path: '/close-button',
    component: () => import('../pages/close-button-page'),
    exact: true,
  },
  {
    path: '/date-picker',
    component: () => import('../pages/date-picker-page'),
    exact: true,
  },
  {
    path: '/date-range-picker',
    component: () => import('../pages/date-range-picker-page'),
    exact: true,
  },
  {
    path: '/form',
    component: () => import('../pages/form-page'),
    exact: true,
  },
  {
    path: '/formatted-number-input',
    component: () => import('../pages/formatted-number-input-page'),
    exact: true,
  },
  {
    path: '/icon',
    component: () => import('../pages/icon-page'),
    exact: true,
  },
  {
    path: '/icon-button',
    component: () => import('../pages/icon-button-page'),
    exact: true,
  },
  {
    path: '/palette',
    component: () => import('../pages/palette-page'),
    exact: true,
  },
  {
    path: '/pin-input',
    component: () => import('../pages/pin-input-page'),
    exact: true,
  },
  {
    path: '/radio',
    component: () => import('../pages/radio-button-page'),
    exact: true,
  },
  {
    path: '/select',
    component: () => import('../pages/select-page'),
    exact: true,
  },
  {
    path: '/switch',
    component: () => import('../pages/switch-page'),
    exact: true,
  },
  {
    path: '/tag',
    component: () => import('../pages/tag-page'),
    exact: true,
  },
  {
    path: '/toast',
    component: () => import('../pages/toast-page'),
    exact: true,
  },
  {
    path: '/textarea',
    component: () => import('../pages/textarea-page'),
    exact: true,
  },
  {
    path: '/status-pin',
    component: () => import('../pages/status-pin-page'),
    exact: true,
  },
  {
    path: '/navbar-item',
    component: () => import('../pages/navbar-item-page'),
    exact: true,
  },
  {
    path: '/status-block',
    component: () => import('../pages/status-block-page'),
    exact: true,
  },
]
