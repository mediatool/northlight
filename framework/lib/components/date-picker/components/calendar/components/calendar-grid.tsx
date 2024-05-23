import React, { memo } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarGrid } from '@react-aria/calendar'
import { getWeeksInMonth } from '@internationalized/date'
import { times } from 'ramda'
import { Table, Tbody, Thead, Tr } from '../../../../table'
import { CalendarCell } from './calendar-cell'
import { CalendarGridProps } from './types'
import { DayLabels } from './day-labels'
import { getWeekdays } from './utils'

export const CalendarGrid = memo(
  ({ state, locale, firstDayOfWeek, ...rest }: CalendarGridProps) => {
    const startDate = state.visibleRange.start
    const { gridProps, headerProps } = useCalendarGrid(rest, state)
    const weeksInMonth = getWeeksInMonth(startDate, locale)
    const weekDays = getWeekdays(firstDayOfWeek)

    return (
      <Table variant="unstyled" { ...gridProps }>
        <Thead { ...headerProps }>
          <DayLabels weekDays={ weekDays } />
        </Thead>
        <Tbody>
          { times(
            (weekIndex) => (
              <Tr key={ weekIndex }>
                { state
                  .getDatesInWeek(weekIndex, startDate)
                  .map((date) =>
                    (date ? (
                      <CalendarCell
                        key={ date.day }
                        state={ state }
                        date={ date }
                        currentMonth={ startDate }
                      />
                    ) : (
                      <chakra.td />
                    ))
                  ) }
              </Tr>
            ),
            weeksInMonth
          ) }
        </Tbody>
      </Table>
    )
  }
)
