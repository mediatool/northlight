import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Core tokens',
    path: '/core-tokens',
    component: () => import('../pages/core-tokens-page'),
  },
  {
    title: 'Component tokens',
    path: '/component-tokens',
    component: () => import('../pages/component-tokens-page'),
  },
]
