import React, { LegacyRef, forwardRef } from 'react'
import { VariableSizeList } from 'react-window'
import AutoSizer from 'react-virtualized-auto-sizer'
import { FastListProps } from './types'

/**
 * Wrapper that renders children in a virtualized stacked layout
 * @see FastGrid
 * @see {@link https://northlight.dev/reference/fast-list}
 *
 * @example (Example)
 * ## Example
 * (?
 * <Box h="500px" w="300p" border="1px solid gray" p={ 4 } borderRadius={ 4 }>
    <FastList itemCount={ 10000 } itemSize={ 30 } overscanCount={ 100 }>
        { (index) => `item-${index}` }
    </FastList>
</Box>
 * ?)
 *
 */
export const FastList = forwardRef(({
  itemCount,
  itemSize,
  direction = 'column',
  children,
  width,
  height,
  overscanCount = 0,
  initialScrollOffset,
  ...rest
}: FastListProps, ref: LegacyRef<VariableSizeList<any>>) => (
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
        ref={ ref }
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
))
