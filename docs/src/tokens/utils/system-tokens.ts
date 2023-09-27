import {
  TottSysstemTokensSet,
  WebappSystemTokensSet,
  typography,
} from '@northlight/tokens'
import { CurrentTheme } from '@northlight/ui'
import { TokensSet } from './types'

const getThemeSet = (theme: CurrentTheme) => {
  switch (theme) {
    case 'webappTheme':
      return WebappSystemTokensSet
    case 'tottTheme':
      return TottSysstemTokensSet
    default:
      return WebappSystemTokensSet
  }
}

export const getSystemTokens = (theme: CurrentTheme) => {
  const themeSet = getThemeSet(theme)
  const {
    st: { color, borderRadius, borderWidth },
  } = themeSet

  const SystemTokens: TokensSet[] = [
    { name: 'Colors', title: 'system-colors', data: color },
    { name: 'Typography', title: 'system-typography', data: typography },
    { name: 'Border Width', title: 'system-borderWidth', data: borderWidth },
    {
      name: 'Border Radius',
      title: 'system-borderRadius',
      data: borderRadius,
    },
  ]
  return SystemTokens
}
