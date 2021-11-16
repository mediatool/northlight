import { Color, ColorShades } from '../color'

export type Palette = Record<Color, ColorShades> & {
  white: string
  black: string
}
