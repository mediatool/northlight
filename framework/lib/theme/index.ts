import {
  ThemeOverride,
  theme as baseTheme,
  extendTheme,
} from '@chakra-ui/react'
import { palette } from './colors'
import * as components from './components'

const overrides: ThemeOverride = {
  colors: palette,
  components,
}

export const theme = extendTheme(overrides, baseTheme)
