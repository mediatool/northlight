import {
  WebappSkin,
  typography,
} from '@mediatool/tokens'
import { TokensSet } from './types'

const { color, sizing, spacing, opacity, borderRadius, borderWidth } = WebappSkin

export const ComponentTokens: TokensSet[] = [
  { name: 'Colors', title: 'components-colors', data: color },
  { name: 'Sizes', title: 'components-sizes', data: sizing },
  { name: 'Spacing', title: 'components-spacing', data: spacing },
  { name: 'Typography', title: 'components-typography', data: typography },
  { name: 'Opacity', title: 'components-opacity', data: opacity },
  { name: 'Border Width', title: 'components-borderWidth', data: borderWidth },
  { name: 'Border Radius', title: 'components-borderRadius', data: borderRadius },
]
