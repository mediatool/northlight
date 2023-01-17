import React from 'react'
import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FastListProps } from './types'

export const FastList = ({
  itemCount,
  itemSize,
  direction = 'column',
  children,
  width,
  height,
  overscanCount = 0,
  initialScrollOffset,
  ...rest
}: FastListProps) => (
  <AutoSizer>
    { ({ width: autoWidth, height: autoHeight }) => (
      <VariableSizeList
        itemCount={ itemCount }
        itemSize={ typeof itemSize === 'number' ? (_index) => itemSize : itemSize }
        height={ height ?? autoHeight }
        width={ width ?? autoWidth }
        layout={ direction === 'column' ? 'vertical' : 'horizontal' }
        initialScrollOffset={ initialScrollOffset }
        overscanCount={ overscanCount }
        { ...rest }
      >
        { ({ style, index }) => (
          <div style={ style }>
            { typeof children === 'function' ? children(index) : children }
          </div>
        ) }
      </VariableSizeList>
    ) }

  </AutoSizer>

)
