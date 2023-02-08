import React, { LegacyRef, forwardRef } from 'react'
import { VariableSizeGrid } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FastGridProps } from './types'

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
