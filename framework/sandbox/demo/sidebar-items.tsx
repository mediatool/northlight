import { IconType } from '~/lib'
import { SidebarItem } from '../types'

type Item = SidebarItem & {
  icon: IconType
}

export const sidebarItems: Item[] = [
  {
    path: '/demo/search',
    title: 'Search',
    icon: 'search',
  },
  {
    path: '/demo/hub',
    title: 'Hub',
    icon: 'hub',
  },
  {
    path: '/demo/campaigns',
    title: 'Plan',
    icon: 'plug',
  },
  {
    path: '/demo/orders',
    title: 'Order',
    icon: 'hub',
  },
  {
    path: '/demo/integrations',
    title: 'Integrations',
    icon: 'plug',
  },
  {
    path: '/demo/settings',
    title: 'Settings',
    icon: 'switches',
  },
]
