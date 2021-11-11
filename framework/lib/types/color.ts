export type Color =
  'blue'
  | 'gray'
  | 'red'
  | 'pink'
  | 'green'
  | 'orange'
  | 'purple'
  | 'yellow'

export type ColorGrade =
  50
  | 100
  | 200
  | 300
  | 400
  | 500
  | 600
  | 700
  | 800
  | 900

export type ColorShades = Record<ColorGrade, string>
export type Palette = Record<Color, ColorShades>
