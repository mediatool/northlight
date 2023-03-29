import { ThemeOverride } from '@chakra-ui/react'
import {
  TottSkin as TottSkinTokens,
  typography,
} from '@northlight/tokens'

export const TottSkin:ThemeOverride = {
  colors: TottSkinTokens.color,
  sizes: TottSkinTokens.sizing,
  space: TottSkinTokens.spacing,
  radii: TottSkinTokens.borderRadius,
  borders: TottSkinTokens.borderWidth,
  opacity: TottSkinTokens.opacity,
  shadows: TottSkinTokens.boxShadow,
  typography,
}
