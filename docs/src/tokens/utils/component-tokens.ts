import {
  TottComponentsTokensSet,
  WebappComponentsTokensSet,
} from '@northlight/tokens'
import { CurrentTheme } from '@northlight/ui'
import { keys, map } from 'ramda'
import { TokensSet } from './types'

const getThemeSet = (theme: CurrentTheme) => {
  switch (theme) {
    case 'webappTheme':
      return WebappComponentsTokensSet
    case 'tottTheme':
      return TottComponentsTokensSet
    default:
      return WebappComponentsTokensSet
  }
}

export const getComponentTokens = (theme: CurrentTheme) => {
  const themeSet = getThemeSet(theme)

  const ComponentTokens: TokensSet[] = map((tokenCategory) => ({
    name: `${tokenCategory}`,
    title: `components-${tokenCategory}`,
    data: themeSet[tokenCategory],
  }), keys(themeSet))

  return ComponentTokens
}
