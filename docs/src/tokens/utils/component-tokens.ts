import {
  TottComponentsTokensSet,
  WebappComponentsTokensSet,
  typography,
} from '@northlight/tokens'
import { CurrentTheme } from '@northlight/ui'
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

  const { color, sizing, spacing, opacity, borderRadius, borderWidth } =
    themeSet

  const ComponentTokens: TokensSet[] = [
    { name: 'Colors', title: 'components-colors', data: color },
    { name: 'Sizes', title: 'components-sizes', data: sizing },
    { name: 'Spacing', title: 'components-spacing', data: spacing },
    { name: 'Typography', title: 'components-typography', data: typography },
    { name: 'Opacity', title: 'components-opacity', data: opacity },
    {
      name: 'Border Width',
      title: 'components-borderWidth',
      data: borderWidth,
    },
    {
      name: 'Border Radius',
      title: 'components-borderRadius',
      data: borderRadius,
    },
  ]

  return ComponentTokens
}
