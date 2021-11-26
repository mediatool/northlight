import { Color, ColorGrade } from '../../color'

export type IconType =
  'hub'
  | 'plus'
  | 'plug'
  | 'search'
  | 'switches'
  | 'mediatoolLogo'

export interface IconProps {
  color?: `${Color}.${ColorGrade}` | 'white' | 'black'
}
