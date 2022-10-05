import { Route } from '../../types'

export const routes: Route[] = [
  {
    path: '/textarea-field-test-page',
    component: () => import('../pages/textarea-field-test-page'),
    exact: true,
  },
  {
    path: '/number-field-test-page',
    component: () => import('../pages/number-field-test-page'),
    exact: true,
  },
  {
    path: '/checkbox-field-test-page',
    component: () => import('../pages/checkbox-field-test-page'),
    exact: true,
  },
  {
    path: '/text-field-test-page',
    component: () => import('../pages/text-field-test-page'),
    exact: true,
  },
  {
    path: '/switch-field-test-page',
    component: () => import('../pages/switch-field-test-page'),
    exact: true,
  },
  {
    path: '/select-field-test-page',
    component: () => import('../pages/select-field-test-page'),
    exact: true,
  },
  {
    path: '/multi-select-field-test-page',
    component: () => import('../pages/multi-select-field-test-page'),
    exact: true,
  },
  {
    path: '/tooltip-test-page',
    component: () => import('../pages/tooltip-test-page'),
    exact: true,
  },
]
