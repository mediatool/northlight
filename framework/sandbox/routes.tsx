import { Dataflow01Duo, SmileyDuo, SquareSetSolid } from '@northlight/icons'
import { MainPage } from './app'
import { routes as docRoutes } from './docs/routes'
import { routes as tokensRoutes } from './tokens/routes'
import { routes as iconsRoutes } from './icons/routes'

export const sandboxRoutes: MainPage[] = [
  {
    title: 'Components',
    Icon: SquareSetSolid,
    path: '/components',
    component: () => import('./docs/app'),
    subItems: docRoutes,
  },
  {
    title: 'Tokens',
    Icon: Dataflow01Duo,
    path: '/tokens',
    component: () => import('./tokens/app'),
    subItems: tokensRoutes,
  },
  {
    title: 'Icons',
    Icon: SmileyDuo,
    path: '/icons',
    component: () => import('./icons/app'),
    subItems: iconsRoutes,
  },
]
