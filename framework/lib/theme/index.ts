import {
  ThemeOverride,
  extendTheme,
} from '@chakra-ui/react'
import { coreZIndex, palette } from '@mediatool/tokens'
import { scrollbarStyles } from './global/scrollbar'
import * as components from './components'

const overrides: ThemeOverride = {
  config: {
    cssVarPrefix: '',
  },
  styles: {
    global: {
      'html, body': {
        height: '100%',
      },
      '#app': {
        height: '100%',
      },
      ...scrollbarStyles,
    },
  },
  fonts: {
    heading: 'Inter, sans-serif',
    body: 'Inter, sans-serif',
  },
  colors: {
    ...palette,
    primary: palette.mediatoolBlue[500],
  },
  components: {
    ...components,
  },
  zIndices: {
    ...coreZIndex,
  },
}

export const theme = extendTheme(overrides)
