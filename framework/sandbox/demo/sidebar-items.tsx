import { IconType } from '~/lib'
import { SidebarItem } from '../types'

type Item = SidebarItem & {
  icon: IconType
}

export const sidebarItems: Item[] = [
  {
    path: '/search',
    title: 'Search',
    icon: 'search',
  },
  {
    path: '/hub',
    title: 'Hub',
    icon: 'hub',
  },
  {
    path: '/campaigns',
    title: 'Plan',
    icon: 'plug',
  },
  {
    path: '/orders',
    title: 'Order',
    icon: 'hub',
  },
  {
    path: '/integrations',
    title: 'Integrations',
    icon: 'plug',
  },
  {
    path: '/settings',
    title: 'Settings',
    icon: 'switches',
  },
]
