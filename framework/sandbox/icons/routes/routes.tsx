import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Duo color',
    path: '/core-tokens',
    component: () => import('../pages/duo-color-page'),
  },
  {
    title: 'Solid',
    path: '/component-tokens',
    component: () => import('../pages/solid-page'),
  },
]
