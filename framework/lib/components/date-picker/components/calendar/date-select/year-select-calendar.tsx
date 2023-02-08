import React, { ChangeEvent } from 'react'
import { YearSelect } from './year-select'
import { useYearsCalendar } from './utils'
import { YearSelectCalendarProps } from './types'

export const YearSelectCalendar = ({ state }: YearSelectCalendarProps) => {
  const { years } = useYearsCalendar({ state })
  const onChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const index = Number(e.target.value)
    const date = years[index].value
    state.setFocusedDate(date)
  }

  return (
    <YearSelect onChange={ onChange } years={ years } />
  )
}
