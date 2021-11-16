import {
  ThemeOverride,
  theme as baseTheme,
  extendTheme,
} from '@chakra-ui/react'
import { palette } from './palette'
import * as components from './components'

const overrides: ThemeOverride = {
  colors: {
    ...palette,
    primary: palette.mediatoolBlue[500],
  },
  components,
}

export const theme = extendTheme(overrides, baseTheme)
