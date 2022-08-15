import { Route } from '../types'

export const sandboxRoutes: Route[] = [
  {
    path: '/docs',
    component: () => import('../docs/app'),
  },
  {
    path: '/demo',
    component: () => import('../demo/app'),
  },
  {
    path: '/test',
    component: () => import('../test/app'),
  },
]
