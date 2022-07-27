/* eslint-disable react/no-unstable-nested-components */
import React, { useLayoutEffect, useState } from 'react'
import {
  Props as DayzedProps,
  useDayzed,
} from 'dayzed'
import { useBoolean } from '../../../../hooks'
import { Controls } from './controls'
import { Day } from './day'
import { DateTuple } from '../types'
import { datesAreNotInSameMonthOrYear } from '../util'
import { BlankDay, WeekDayLabels, Weeks, YearsGrid } from '../../components'
import { FirstDayOfWeek } from '../../util'
import { Box } from '../../../box'

type Props = Omit<DayzedProps, 'onDateSelected' | 'firstDayOfWeek' | 'selected'> & {
  onDateSelected(date: Date): void
  firstDayOfWeek?: FirstDayOfWeek
  selected: Date | undefined
  dateRange: Partial<DateTuple>
  presetIsSelected: boolean
  onYearSelected: (year: number) => void
}

export const Calendar = (props: Props) => {
  const [ isSelectingYear, { toggle } ] = useBoolean(false)
  // Used to control which month to render in the calendar.
  // This state in combination with the offset hook in the parent, is what makes it possible to
  // jump to the correct month when user selects a preset, a range in different months, or
  // a different year.
  const [ internalDate, setInternalDate ] = useState(props.date ?? new Date())

  const dayzed = useDayzed({
    ...props,
    date: internalDate,
    onDateSelected: ({ date }) => props.onDateSelected(date),
    offset: props.offset,
    onOffsetChanged: props.onOffsetChanged,
  })

  // Only set the internal date if the user selects a range that's not in the same month.
  // This prevents the left calendar from jumping to the month in the right calendar,
  // if the full range is selected from the right calendar.
  useLayoutEffect(() => {
    const { selected, dateRange, presetIsSelected } = props
    const [ start, end ] = dateRange

    // If a preset is selected, alwayas set the internal date.
    if (presetIsSelected && selected) {
      setInternalDate(selected)
    }

    if (
      selected &&
      (end && start) &&
      datesAreNotInSameMonthOrYear(start, end)
    ) {
      setInternalDate(selected)
    }
  }, [ props.selected, props.dateRange, props.presetIsSelected ])

  const handleYearSelect = (year: number) => {
    const date = new Date()

    date.setFullYear(year)
    date.setMonth(new Date().getMonth())

    setInternalDate(date)
    props.onYearSelected(year)
    toggle()
  }

  const { calendars, getBackProps, getForwardProps } = dayzed
  const [ calendar ] = calendars

  if (isSelectingYear) {
    return (
      <Box w={ 56 }>
        <YearsGrid
          onYearSelect={ handleYearSelect }
          toggleYears={ toggle }
          month={ calendar.month }
          year={ calendar.year }
        />
      </Box>
    )
  }

  return (
    <Box>
      <Controls
        prev={ getBackProps({ calendars }) }
        next={ getForwardProps({ calendars }) }
        month={ calendar.month }
        year={ calendar.year }
        toggleYears={ toggle }
      />
      <WeekDayLabels firstDayOfWeek={ props.firstDayOfWeek } />
      <Weeks
        weeks={ calendar.weeks }
        day={ (day, index) => (
          typeof day === 'string'
            ? <BlankDay key={ index } />
            : (
              <Day
                day={ day }
                key={ index }
                dayzedDateProps={ dayzed.getDateProps({ dateObj: day }) }
              />
            )
        ) }
      />
    </Box>
  )
}
