import React, { ChangeEvent, useEffect, useState } from 'react'
import { Select, useMultiStyleConfig } from '@chakra-ui/react'
import { months } from '../constants'
import { MonthSelectProps } from './types'

export const MonthSelect = ({
  state,
  offset = 0,
}: MonthSelectProps) => {
  const { dateSelect } = useMultiStyleConfig('Calendar')
  const start = state.visibleRange.start.add({ months: offset }).month - 1
  const [ selectedIndex, setSelectedIndex ] = useState(start)
  const [ isEditing, setIsEditing ] = useState(false)

  const moveStartDateBy = (inp: any) => state.visibleRange.start.add(inp)

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    setSelectedIndex(index)
    setIsEditing(false)
    const diff = index - start
    state.setFocusedDate(moveStartDateBy({ months: diff }))
  }

  useEffect(() => {
    setSelectedIndex(
      state.visibleRange.start.add({ months: offset }).month - 1
    )
  }, [ state.visibleRange ])

  const handleKeyDown = (e: any) => {
    switch (e.key) {
      case 'ArrowDown':
      case 'ArrowUp':
      case ' ':
        setIsEditing((prev) => !prev)
        break
      default:
        break
    }
  }

  return (
    <Select
      id="month"
      aria-label="Select Month"
      onChange={ onChange }
      onClick={ () => setIsEditing((prev) => !prev) }
      onKeyDown={ handleKeyDown }
      value={ selectedIndex }
      iconSize="0px"
      size="sm"
      variant="unstyled"
      sx={ dateSelect }
    >
      { isEditing ? (
        months.map((month, i) => (
          <option key={ month } value={ i }>
            { month }
          </option>
        ))
      ) : (
        <option value={ selectedIndex }>{ months[selectedIndex] }</option>
      ) }
    </Select>
  )
}
