import { ThemeOverride } from '@chakra-ui/react'
import {
  WebappComponentsTokensSet,
  WebappSystemTokensSet,
  typography,
} from '@northlight/tokens'

export const WebappSkin: ThemeOverride = {
  colors: {
    ...WebappSystemTokensSet.st.color,
    ...WebappComponentsTokensSet.color,
    border: {
      ...WebappSystemTokensSet.st.color.border,
      ...WebappComponentsTokensSet.color.border,
    },
  },
  sizes: WebappComponentsTokensSet.sizing,
  space: WebappComponentsTokensSet.spacing,
  radii: {
    ...WebappSystemTokensSet.st.borderRadius,
    ...WebappComponentsTokensSet.borderRadius,
  },
  borders: {
    ...WebappSystemTokensSet.st.borderWidth,
    ...WebappComponentsTokensSet.borderWidth,
  },
  opacity: WebappComponentsTokensSet.opacity,
  typography,
  shadows: { ...WebappSystemTokensSet.st.boxShadow },
}
