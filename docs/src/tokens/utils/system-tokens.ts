import {
  TottSysstemTokensSet,
  WebappSystemTokensSet,
  typography,
} from '@northlight/tokens'
import { CurrentTheme } from '@northlight/ui'
import { keys, map } from 'ramda'
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

  const SystemTokens: TokensSet[] = map((tokenCategory) => ({
    name: `${tokenCategory}`,
    title: `system-${tokenCategory}`,
    data: themeSet.st[tokenCategory],
  }), keys(themeSet.st))

  const SystemTokensWithTypography: TokensSet[] = [
    ...SystemTokens,
    { name: 'Typography', title: 'system-typography', data: typography },
  ]

  return SystemTokensWithTypography
}
