import React, {
  useCallback,
  useRef,
  useState,
} from 'react'
import { DateObj, useDayzed } from 'dayzed'
import { ContextValue, DatePickerProps } from './types'
import { Calendar } from './components/calendar'
import { DatePickerContext, toggleDatesCollection } from './util'

export const DatePicker = (props: DatePickerProps) => {
  // Dayzed is able to take a date passed to it, and give us back a "calendar".
  // This is used to render the calendar for the given date.
  const [ internalDate, setInternalDate ] = useState(props.date ?? new Date())

  // Store todays date in a ref, so when selecting a year, we set the same month as todays date.
  // Small optimization in the sense that we don't have to create new date objects,
  // every time the user selects a year.
  const { current: todaysDate } = useRef(new Date())

  const toggleDate = useCallback((date: DateObj) => {
    const nextDates = toggleDatesCollection(props.selected, date.date)
    props.onChange(nextDates)
  }, [ props.selected ])

  const dayzed = useDayzed({
    ...props,
    onDateSelected: toggleDate,
    date: internalDate,
  })

  const handleYearSelect = (year: number) => {
    const date = new Date()
    date.setFullYear(year)
    date.setMonth(todaysDate.getMonth())
    setInternalDate(date)
  }

  const contextValue: ContextValue = {
    dayzed,
    toggleDate,
    todaysDate,
  }
  const { calendars } = dayzed
  // This date picker is responsible for picking single or multiple dates, so we can safely
  // assume that only one month (one calendar) will be rendered at any given time
  const [ calendar ] = calendars

  return (
    <DatePickerContext.Provider value={ contextValue }>
      <Calendar
        calendar={ calendar }
        firstDayOfWeek={ props.firstDayOfWeek }
        onYearSelect={ handleYearSelect }
      />
    </DatePickerContext.Provider>
  )
}
