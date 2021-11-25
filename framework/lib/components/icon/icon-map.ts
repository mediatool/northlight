import { IconType } from '~/lib/types'
import { HubIcon, PlugIcon, PlusIcon, SearchIcon, SwitchesIcon } from '../icons'

export const iconMap: Record<IconType, React.ComponentType<any>> = {
  hub: HubIcon,
  plug: PlugIcon,
  plus: PlusIcon,
  search: SearchIcon,
  switches: SwitchesIcon,
}
