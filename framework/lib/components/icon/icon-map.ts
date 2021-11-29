import { IconType } from '~/lib/types'
import {
  HubIcon,
  MediatoolLogoIcon,
  PlugIcon,
  PlusIcon,
  SearchIcon,
  SwitchesIcon,
} from '../icons'

export const iconMap: Record<IconType, React.ComponentType<any>> = {
  hub: HubIcon,
  plug: PlugIcon,
  plus: PlusIcon,
  search: SearchIcon,
  switches: SwitchesIcon,
  mediatoolLogo: MediatoolLogoIcon,
}
