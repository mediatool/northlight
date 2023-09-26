import React, { memo } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarGrid } from '@react-aria/calendar'
import { getWeeksInMonth } from '@internationalized/date'
import { times } from 'ramda'
import { Table, Tbody, Thead, Tr } from '../../../../table'
import { CalendarCell } from './calendar-cell.tsx'
import { CalendarGridProps } from './types.ts'
import { DayLabels } from './day-labels.tsx'

export const CalendarGrid = memo(
  ({ state, locale, ...rest }: CalendarGridProps) => {
    const startDate = state.visibleRange.start
    const { gridProps, headerProps, weekDays } = useCalendarGrid(rest, state)
    const weeksInMonth = getWeeksInMonth(startDate, locale)

    return (
      <Table variant="unstyled" { ...gridProps }>
        <Thead { ...headerProps }>
          <DayLabels weekDays={ weekDays } />
        </Thead>
        <Tbody>
          { times((weekIndex) => (
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
          ), weeksInMonth) }
        </Tbody>
      </Table>
    )
  }
)
