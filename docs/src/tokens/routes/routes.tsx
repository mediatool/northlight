import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Tokens Picker',
    path: '/tokens-picker',
    component: () => import('../pages/tokens-picker-page'),
  },
  {
    title: 'Global reference tokens',
    path: '/global-tokens',
    component: () => import('../pages/core-tokens-page'),
  },
  {
    title: 'System tokens',
    path: '/system-tokens',
    component: () => import('../pages/system-tokens-page'),
  },
  {
    title: 'Component tokens',
    path: '/component-tokens',
    component: () => import('../pages/component-tokens-page'),
  },
]
