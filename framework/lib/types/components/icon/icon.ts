import { Color, ColorGrade } from '../../color'

export type IconType =
  'hub'
  | 'plus'
  | 'plug'
  | 'search'
  | 'switches'

export interface IconProps {
  color?: `${Color}.${ColorGrade}`
  size?: number
}
