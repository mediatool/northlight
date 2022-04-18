import { PinSize } from './types'

type PinSizeTuple = [ string, string ]

export const pinSizeMap: Record<PinSize, PinSizeTuple > = {
  sm: [ '20px', '11px' ],
  md: [ '22px', '12px' ],
  lg: [ '24px', '13px' ],
}
