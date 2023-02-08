import {
  coreBorderRadius,
  coreBoxShadow,
  coreFontSize,
  coreFontWeight,
  coreLineHeight,
  coreSizing,
  coreSpacing,
  coreZIndex,
  palette,
} from '@mediatool/tokens'
import { TokensSet } from './types'

export const CoreTokens: TokensSet[] = [
  { name: 'Palette', title: 'core-colors', data: palette },
  { name: 'Sizes', title: 'core-sizes', data: coreSizing },
  { name: 'Spacing', title: 'core-spacing', data: coreSpacing },
  { name: 'Z Index', title: 'core-zIndex', data: coreZIndex },
  { name: 'Font Weights', title: 'core-fontWeight', data: coreFontWeight },
  { name: 'Font Sizes', title: 'core-fontSize', data: coreFontSize },
  { name: 'Line Height', title: 'core-lineHeight', data: coreLineHeight },
  { name: 'Shadows', title: 'core-shadows', data: coreBoxShadow },
  { name: 'Border Radius', title: 'core-borderRadius', data: coreBorderRadius },
]
