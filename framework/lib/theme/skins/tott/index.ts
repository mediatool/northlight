import { ThemeOverride } from '@chakra-ui/react'
import {
  TottComponentsTokensSet,
  TottSystemTokensSet,
  typography,
} from '@northlight/tokens'

export const TottSkin: ThemeOverride = {
  colors: {
    ...TottSystemTokensSet.st.color,
    ...TottComponentsTokensSet.color,
    border: {
      ...TottSystemTokensSet.st.color.border,
      ...TottComponentsTokensSet.color.border,
    },
  },
  sizes: TottComponentsTokensSet.sizing,
  space: TottComponentsTokensSet.spacing,
  radii: {
    ...TottSystemTokensSet.st.borderRadius,
    ...TottComponentsTokensSet.borderRadius,
  },
  borders: {
    ...TottSystemTokensSet.st.borderWidth,
    ...TottComponentsTokensSet.borderWidth,
  },
  opacity: TottComponentsTokensSet.opacity,
  typography,
  shadows: { ...TottSystemTokensSet.st.boxShadow },
}
