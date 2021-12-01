import { TabKind } from './types'

type TabKindColorTuple = [string, string]

export const kindColorsMap: Record<TabKind, TabKindColorTuple> = {
  base: [ 'mediatoolBlue.400', 'mediatoolBlue.600' ],
  danger: [ 'red.400', 'red.600' ],
}
