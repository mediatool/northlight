import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Global reference tokens',
    path: '/global-tokens',
    component: () => import('../pages/core-tokens-page'),
  },
  {
    title: 'Component and system tokens',
    path: '/component-tokens',
    component: () => import('../pages/component-tokens-page'),
  },
]
