import React, { LegacyRef, forwardRef } from 'react'
import { VariableSizeGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FastGridProps } from './types'

/**
 * Wrapper that renders children in a virtualized html grid layout
 * @see FastList
 * @see {@link https://northlight.dev/reference/fast-grid}
 *
 * @example (Example)
 * ## Simple example
 * (?
 *       <Box h="500px" w="full" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
        <FastGrid
          columns={ 10000 }
          rows={ 10000 }
          rowSize={ 100 }
          columnSize={ 100 }
          overscanRowCount={ 10 }
          overscanColumnCount={ 1 }
        >
          { (rowIndex, columnIndex) => `[${rowIndex}, ${columnIndex}]` }
        </FastGrid>
      </Box>
 *
 * ?)
 *
 * @example (Example)
 * ## Spreadsheet example
 * (?
 * +
 *
const getCell = (rowIndex, columnIndex) => {
  if (rowIndex === 0 && columnIndex === 0) return ''
  if (rowIndex === 0) {
    return (
      <Lead w="full">
        { ' ' }
        Col { columnIndex }
      </Lead>
    )
  }
  if (columnIndex === 0) {
    return (
      <Lead w="full">
        { ' ' }
        Row { rowIndex }
      </Lead>
    )
  }
  return (
    <TextField name={ `${rowIndex}-${columnIndex}` } />
  )
}
 *
 * const MyGrid = () => {
 * const [values, setValues ] = useState({})
 * return(
 * <Form initialValues={{}}>
 * {({getValues}) => (
 * <Stack>
 * <Box h="500px" w="500p" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
    <FastGrid
        columns={ 10000 }
        rows={ 10000 }
        rowSize={ 50 }
        columnSize={ 100 }
        overscanRowCount={ 10 }
        overscanColumnCount={ 1 }
    >
    {getCell}
    </FastGrid>
</Box>
<Button onClick={() => setValues(getValues())} variant="success">Save</Button>
<Code> <pre>{JSON.stringify(values, null, 2)}</pre></Code>
</Stack>
 * )}
    </Form>
 * )}

render(<MyGrid />)
 *
 *
 * ?)
 * **(Note, FastGrid must be wrapped in a parent element with set height and width!)**
 *
*/
export const FastGrid = forwardRef(({
  columns,
  rows,
  columnSize,
  rowSize,
  children,
  width,
  height,
  overscanRowCount = 0,
  overscanColumnCount = 0,
  ...rest
}: FastGridProps, ref: LegacyRef<VariableSizeGrid<any>>) => (
  <AutoSizer>
    { ({ width: autoWidth, height: autoHeight }) => (
      <VariableSizeGrid
        rowCount={ rows }
        columnCount={ columns }
        columnWidth={ typeof columnSize === 'number' ? (_index) => columnSize : columnSize }
        rowHeight={ typeof rowSize === 'number' ? (_index) => rowSize : rowSize }
        height={ height ?? autoHeight }
        width={ width ?? autoWidth }
        overscanRowCount={ overscanRowCount }
        overscanColumnCount={ overscanColumnCount }
        ref={ ref }
        { ...rest }
      >
        { ({ style, rowIndex, columnIndex }) => (
          <div style={ style }>
            { typeof children === 'function' ? children(rowIndex, columnIndex) : children }
          </div>
        ) }
      </VariableSizeGrid>
    ) }
  </AutoSizer>
))
