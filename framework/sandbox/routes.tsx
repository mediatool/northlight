import { ClockDuo, Dataflow01Duo, SquareSetSolid } from '@mediatool/icons'
import { MainPage } from './app'
import { routes as docRoutes } from './docs/routes'
import { routes as testRoutes } from './test/routes'
import { routes as tokensRoutes } from './tokens/routes'

export const sandboxRoutes: MainPage[] = [
  {
    title: 'Components',
    Icon: SquareSetSolid,
    path: '/components',
    component: () => import('./docs/app'),
    subItems: docRoutes,
  },
  {
    title: 'Tests',
    Icon: ClockDuo,
    path: '/test',
    component: () => import('./test/app'),
    subItems: testRoutes,
  },
  {
    title: 'Tokens',
    Icon: Dataflow01Duo,
    path: '/tokens',
    component: () => import('./tokens/app'),
    subItems: tokensRoutes,
  },
]
