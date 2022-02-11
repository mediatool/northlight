import React, { useState } from 'react'
import { Calendar as DayzedCalendar } from 'dayzed'
import { Controls } from './controls'
import { Day } from './day'
import { BlankDay, WeekDayLabels, Weeks, YearsGrid } from '../../components'
import { FirstDayOfWeek } from '../../util'
import { Card } from '../../../card'

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
          <WeekDayLabels firstDayOfWeek={ firstDayOfWeek } />
          <Weeks
            weeks={ calendar.weeks }
            day={ (day, index) => (
              typeof day === 'string'
                ? <BlankDay key={ index } />
                : (
                  <Day key={ index } day={ day } />
                )
            ) }
          />
        </>
      ) }
    </Card>
  )
}
