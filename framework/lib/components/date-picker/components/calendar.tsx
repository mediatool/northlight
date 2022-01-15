import React, { useState } from 'react'
import { Calendar as DayzedCalendar } from 'dayzed'
import { Weeks } from './weeks'
import { WeekDayLabels } from './week-day-labels'
import { YearsGrid } from './years-grid'
import { Controls } from './controls'
import { Card } from '../../card'
import { FirstDayOfWeek } from '../types'
import { mondayFirstWeekDays, sundayFirstWeekDays } from '../util'

interface Props {
  calendar: DayzedCalendar
  firstDayOfWeek?: FirstDayOfWeek
  onYearSelect: (year: number) => void
}

export const Calendar = ({
  calendar,
  firstDayOfWeek = 0,
  onYearSelect,
}: Props) => {
  const [ isSelectingYear, setIsSelectingYear ] = useState(false)
  const weekDays = firstDayOfWeek === 0
    ? sundayFirstWeekDays
    : mondayFirstWeekDays

  const toggleYears = () => setIsSelectingYear((val) => !val)

  const handleYearSelect = (year: number) => {
    onYearSelect(year)
    setIsSelectingYear(false)
  }

  return (
    <Card size="max-content" shadow="md" p={ 4 }>
      { isSelectingYear ? (
        <YearsGrid
          onYearSelect={ handleYearSelect }
          toggleYears={ toggleYears }
          month={ calendar.month }
          year={ calendar.year }
        />
      ) : (
        <>
          <Controls
            month={ calendar.month }
            year={ calendar.year }
            toggleYears={ toggleYears }
          />
          <WeekDayLabels labels={ weekDays } />
          <Weeks weeks={ calendar.weeks } />
        </>
      ) }
    </Card>
  )
}
