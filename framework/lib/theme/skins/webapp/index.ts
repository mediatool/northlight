import { ThemeOverride } from '@chakra-ui/react'
import {
  borderRadius,
  borderWidth,
  color,
  opacity,
  sizing,
  spacing,
  typography,
} from '@mediatool/tokens'

export const WebappSkin:ThemeOverride = {
  colors: color,
  sizes: sizing,
  space: spacing,
  radii: borderRadius,
  borders: borderWidth,
  opacity,
  typography,
}
