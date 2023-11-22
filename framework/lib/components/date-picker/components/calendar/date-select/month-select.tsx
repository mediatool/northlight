import React, { ChangeEvent } from 'react'
import { Select, useMultiStyleConfig } from '@chakra-ui/react'
import { months } from '../constants'
import { MonthSelectProps } from './types'

export const MonthSelect = ({ state }: MonthSelectProps) => {
  const { dateSelect } = useMultiStyleConfig('Calendar')
  const selectedMonth = state.visibleRange.start.month - 1

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const diff = index - selectedMonth
    state.setFocusedDate(state.visibleRange.start.add({ months: diff }))
  }

  return (
    <Select
      id="month"
      aria-label="Select Month"
      onChange={ onChange }
      value={ selectedMonth }
      iconSize="0px"
      size="sm"
      variant="unstyled"
      sx={ dateSelect }
      w="max-content"
      textAlign="center"
    >
      { months.map((month, i) => (
        <option value={ i }>
          { month }
        </option>
      )) }
    </Select>
  )
}
