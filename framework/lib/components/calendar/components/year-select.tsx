import React, { ChangeEvent } from 'react'
import { Select, useMultiStyleConfig } from '@chakra-ui/react'
import { CalendarState } from '@react-stately/calendar'
import { useYearsRange } from '../util'

export const YearSelect = ({ state }: { state: CalendarState }) => {
  const { years } = useYearsRange({ state })
  const { yearSelect } = useMultiStyleConfig('Calendar')

  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const date = years[index].value
    state.setFocusedDate(date)
  }

  return (
    <Select
      id="year"
      aria-label="Year"
      onChange={ onChange }
      value={ 10 }
      iconColor="transparent"
      size="sm"
      sx={ yearSelect }
    >
      { years.map((year, i) => (
        <option key={ year.formatted } value={ i }>
          { year.formatted }
        </option>
      )) }
    </Select>
  )
}
