import { VariableSizeGridProps } from 'react-window'

export interface FastGridProps
  extends Omit<
  VariableSizeGridProps,
  | 'children'
  | 'height'
  | 'width'
  | 'columnWidth'
  | 'rowHeight'
  | 'columnCount'
  | 'rowCount'
  > {
  columnSize: number | ((index: number) => number)
  rowSize: number | ((index: number) => number)
  columns: number
  rows: number
  children:
  | JSX.Element
  | ((rowIndex: number, columnIndex: number) => JSX.Element | string | null)
  | string
  width?: number
  height?: number
  overscanRowCount?: number
  overscanColumnCount?: number
}
