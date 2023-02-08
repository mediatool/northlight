import { palette } from '@mediatool/tokens'
import { Color, ColorGrade } from '../../types'

export const getShades = (startShade: number, endShade?: number) => {
  let start: number
  let end: number
  if (!endShade) {
    start = startShade
    end = startShade
  } else if (endShade > startShade) {
    start = startShade
    end = endShade
  } else {
    start = endShade
    end = startShade
  }

  return (
    Object.keys(palette).reduce((colors, color) => {
      if (color === 'mono') return colors
      return colors.concat(
        Object.keys(palette[color as Color])
          .filter((value) =>
            parseInt(value, 10) >= start
          && parseInt(value, 10) <= end
          )
          .map((shade) => palette[color as Color][shade as unknown as ColorGrade])
      )
    }, [] as string[])
  )
}
