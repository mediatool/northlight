import { StackingDirection } from '../field'

export type FastListProps = {
  itemSize: number | ((index: number) => number)
  itemCount: number
  direction?: StackingDirection
  children: JSX.Element | ((index: number) => JSX.Element | string) | string
  width?: number
  height?: number
  initialScrollOffset?: number
  overscanCount?: number
}
