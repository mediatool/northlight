import {
  DatabaseDuo,
  Dataflow01Duo,
  SmileyDuo,
  SquareSetSolid,
} from '@northlight/icons'
import { MainPage } from './app'
import { routes as docRoutes } from './docs/routes'
import { routes as tokensRoutes } from './tokens/routes'
import { routes as iconsRoutes } from './icons/routes'
import { routes as referenceRoutes } from './reference/routes'

export const sandboxRoutes: MainPage[] = [
  {
    title: 'Guide',
    Icon: SquareSetSolid,
    path: '/guide',
    component: () => import('./docs/app'),
    subItems: docRoutes,
  },
  {
    title: 'Reference',
    Icon: DatabaseDuo,
    path: '/reference',
    component: () => import('./reference/app'),
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
