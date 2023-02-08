import { ThemeOverride } from '@chakra-ui/react'
import {
  WebappSkin as WebappSkinTokens,
  typography,
} from '@northlight/tokens'

export const WebappSkin:ThemeOverride = {
  colors: WebappSkinTokens.color,
  sizes: WebappSkinTokens.sizing,
  space: WebappSkinTokens.spacing,
  radii: WebappSkinTokens.borderRadius,
  borders: WebappSkinTokens.borderWidth,
  opacity: WebappSkinTokens.opacity,
  typography,
}
