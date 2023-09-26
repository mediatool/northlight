import React from 'react'
import {
  Box,
  FastGrid,
  Heading,
  TextField,
} from '@northlight/ui/ts'

const getCell = (rowIndex: number, columnIndex: number) => {
  if (rowIndex === 0 && columnIndex === 0) return ''
  if (rowIndex === 0) {
    return (
      <Heading size="sm" position="sticky">
        { ' ' }
        Col { columnIndex }
      </Heading>
    )
  }
  if (columnIndex === 0) {
    return (
      <Heading size="sm" position="sticky">
        { ' ' }
        Row { rowIndex }
      </Heading>
    )
  }
  return (
    <TextField name={ `${rowIndex}-${columnIndex}` } label="" />
  )
}
export const PageThree = () => (
  <Box h="500px">
    <FastGrid
      columns={ 1000 }
      rows={ 1000 }
      rowSize={ 40 }
      columnSize={ 100 }
      overscanColumnCount={ 2 }
      overscanRowCount={ 3 }
    >
      { getCell }
    </FastGrid>
  </Box>
)
