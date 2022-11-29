import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'Duo color',
    path: '/duo',
    component: () => import('../pages/duo-color-page'),
  },
  {
    title: 'Solid',
    path: '/solid',
    component: () => import('../pages/solid-page'),
  },
]
