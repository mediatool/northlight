import { ThemeOverride } from '@chakra-ui/react'
import {
  TottComponentsTokensSet,
  TottSysstemTokensSet,
  typography,
} from '@northlight/tokens'

export const TottSkin: ThemeOverride = {
  colors: {
    ...TottSysstemTokensSet.st.color,
    ...TottComponentsTokensSet.color,
    border: {
      ...TottSysstemTokensSet.st.color.border,
      ...TottComponentsTokensSet.color.border,
    },
  },
  sizes: TottComponentsTokensSet.sizing,
  space: TottComponentsTokensSet.spacing,
  radii: {
    ...TottSysstemTokensSet.st.borderRadius,
    ...TottComponentsTokensSet.borderRadius,
  },
  borders: {
    ...TottSysstemTokensSet.st.borderWidth,
    ...TottComponentsTokensSet.borderWidth,
  },
  opacity: TottComponentsTokensSet.opacity,
  typography,
  shadows: { ...TottSysstemTokensSet.st.boxShadow },
}
