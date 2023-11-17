import { Page } from '../../app'

export const routes: Page[] = [
  {
    title: 'About Tokens',
    path: '/about-tokens',
    component: () => import('../pages/about-tokens-page'),
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
