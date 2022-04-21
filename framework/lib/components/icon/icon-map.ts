import { IconType } from '~/lib/types'
import {
  CheckedIconFilled,
  FolderOpenIcon,
  HourGlassIcon,
  HubIcon,
  MediatoolLogoIcon,
  MinusIconFilled,
  PlugIcon,
  PlusIcon,
  PositionMarkerIcon,
  RefreshIcon,
  ReportIcon,
  SearchIcon,
  SettingsIcon,
  SwitchesIcon,
} from '../icons'

export const iconMap: Record<IconType, React.ComponentType<any>> = {
  hub: HubIcon,
  plug: PlugIcon,
  plus: PlusIcon,
  search: SearchIcon,
  switches: SwitchesIcon,
  mediatoolLogo: MediatoolLogoIcon,
  settings: SettingsIcon,
  folderOpen: FolderOpenIcon,
  positionMarker: PositionMarkerIcon,
  report: ReportIcon,
  approved: CheckedIconFilled,
  rejected: MinusIconFilled,
  working: RefreshIcon,
  pending: HourGlassIcon,
}
