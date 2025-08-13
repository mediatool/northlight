import { path } from 'ramda'
import type { CurrentTheme } from '../utils'

const themeMap: Record<CurrentTheme, Record<string, string>> = {
  camphouseLightTheme: {
    green: 'moss',
    pink: 'rose',
    orange: 'coral',
    gray: 'smoke',
  },
  webappTheme: {},
  tottTheme: {},
}

export interface ProcessColorSchemeBasedOnThemeProps {
  currentTheme: CurrentTheme
  colorScheme: string
}

export const processColorSchemeBasedOnTheme = ({
  currentTheme,
  colorScheme,
}: ProcessColorSchemeBasedOnThemeProps) =>
  path<string>([ currentTheme, colorScheme ], themeMap) ?? colorScheme
