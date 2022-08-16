import { IconType } from '../../lib'
import { SidebarItem } from '../types'

type Item = SidebarItem & {
  icon: IconType
}

export const sidebarItems: Item[] = [
  {
    path: '/demo/hub',
    title: 'Hub',
    icon: 'hub',
  },
  {
    path: '/demo/campaigns',
    title: 'Plan',
    icon: 'positionMarker',
  },
  {
    path: '/demo/reports',
    title: 'Report',
    icon: 'report',
  },
  {
    path: '/demo/orders',
    title: 'Order',
    icon: 'folderOpen',
  },
  {
    path: '/demo/integrations',
    title: 'Integrate',
    icon: 'plug',
  },
  {
    path: '/demo/settings',
    title: 'Settings',
    icon: 'settings',
  },
]
