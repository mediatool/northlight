import { PinSize } from './types'

type PinSizeTuple = [ number, number ]

export const pinSizeMap: Record<PinSize, PinSizeTuple > = {
  sm: [ 4, 2 ],
  md: [ 5, 3 ],
  lg: [ 6, 3.5 ],
}
