import { StackDirection } from '@chakra-ui/react'

export type FastListProps = {
  itemSize: number | ((index: number) => number)
  itemCount: number
  direction?: StackDirection
  children: JSX.Element | ((index: number) => JSX.Element | string) | string
  width?: number
  height?: number
  initialScrollOffset?: number
  overscanCount?: number
}
