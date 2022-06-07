import { Color, ColorGrade } from '../../color'

export type IconType =
  'hub'
  | 'plus'
  | 'plug'
  | 'search'
  | 'switches'
  | 'mediatoolLogo'
  | 'settings'
  | 'folderOpen'
  | 'positionMarker'
  | 'report'
  | 'approved'
  | 'rejected'
  | 'working'
  | 'pending'
  | 'messageFilled'
  | 'caretDown'
  | 'caretRight'
  | 'caretUp'
  | 'caretLeft'
  | 'threeDots'

export interface IconProps {
  color?: `${Color}.${ColorGrade}` | 'white' | 'black'
}
