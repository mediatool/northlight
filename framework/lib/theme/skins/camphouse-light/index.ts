import { ThemeOverride } from '@chakra-ui/react'
import {
  CamphouseLightComponentsTokensSet,
  CamphouseLightSystemTokensSet,
  typography,
} from '@northlight/tokens'

export const CamphouseLightSkin: ThemeOverride = {
  colors: {
    ...CamphouseLightSystemTokensSet.st.color,
    ...CamphouseLightComponentsTokensSet.color,
    text: {
      ...CamphouseLightSystemTokensSet.st.color.text,
      ...CamphouseLightComponentsTokensSet.color.text,
    },
    border: {
      ...CamphouseLightSystemTokensSet.st.color.border,
      ...CamphouseLightComponentsTokensSet.color.border,
    },
  },
  sizes: CamphouseLightComponentsTokensSet.sizing,
  space: CamphouseLightComponentsTokensSet.spacing,
  radii: {
    ...CamphouseLightSystemTokensSet.st.borderRadius,
    ...CamphouseLightComponentsTokensSet.borderRadius,
  },
  borders: {
    ...CamphouseLightSystemTokensSet.st.borderWidth,
    ...CamphouseLightComponentsTokensSet.borderWidth,
  },
  opacity: CamphouseLightComponentsTokensSet.opacity,
  typography,
  shadows: { ...CamphouseLightSystemTokensSet.st.boxShadow },
}
