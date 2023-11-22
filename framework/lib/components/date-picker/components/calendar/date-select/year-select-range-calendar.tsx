import React, { ChangeEvent } from 'react'
import { YearSelect } from './year-select'
import { useYearsRangeCalendar } from './utils'
import { YearSelectRangeCalendarProps } from './types'

export const YearSelectRangeCalendar = ({
  state,
}: YearSelectRangeCalendarProps) => {
  const { years } = useYearsRangeCalendar({ state })
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const date = years[index].value
    state.setFocusedDate(date)
  }

  return (
    <YearSelect onChange={ onChange } years={ years } />
  )
}
