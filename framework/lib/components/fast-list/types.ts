import { StackDirection } from '@chakra-ui/react'
import { VariableSizeListProps } from 'react-window'

export interface FastListProps
  extends Omit<
  VariableSizeListProps,
  'itemSize' | 'children' | 'height' | 'width' | 'direction'
  > {
  itemSize: number | ((index: number) => number)
  itemCount: number
  direction?: StackDirection
  children: JSX.Element | ((index: number) => JSX.Element | string) | string
  width?: number
  height?: number
  initialScrollOffset?: number
  overscanCount?: number
}
