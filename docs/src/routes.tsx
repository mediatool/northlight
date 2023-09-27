import {
  DatabaseDuo,
  Dataflow01Duo,
  SmileyDuo,
  SquareSetSolid,
} from '@northlight/icons'
import { MainPage } from './app/index.ts'
import { routes as docRoutes } from './docs/routes/index.ts'
import { routes as tokensRoutes } from './tokens/routes/index.ts'
import { routes as iconsRoutes } from './icons/routes/index.ts'
import { routes as referenceRoutes } from './reference/routes/routes.tsx'

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
