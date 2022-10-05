export type FastGridProps = {
  columnSize: number | ((index: number) => number)
  rowSize: number | ((index: number) => number)
  columns: number
  rows: number
  children: JSX.Element | (
    (rowIndex: number, columnIndex: number) => JSX.Element | string | null
  ) | string
  width?: number
  height?: number
  overscanRowCount?: number
  overscanColumnCount?: number
}
