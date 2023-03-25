import { Dataflow01Duo, SmileyDuo, SquareSetSolid } from '@northlight/icons'
import { MainPage } from './app'
import { routes as docRoutes } from './docs/routes'
import { routes as tokensRoutes } from './tokens/routes'
import { routes as iconsRoutes } from './icons/routes'
import { routes as referenceRoutes } from './reference/routes'

export const sandboxRoutes: MainPage[] = [
  {
    title: 'Components',
    Icon: SquareSetSolid,
    path: '/components',
    component: () => import('./docs/app'),
    subItems: docRoutes,
  },
  {
    title: 'Reference',
    Icon: SquareSetSolid,
    path: '/reference',
    component: () => import('./docs/app'),
    subItems: referenceRoutes,
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
