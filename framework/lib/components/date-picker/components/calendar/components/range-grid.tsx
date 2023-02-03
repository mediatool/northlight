import React from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarGrid } from '@react-aria/calendar'
import { endOfMonth, getWeeksInMonth } from '@internationalized/date'
import { times } from 'ramda'
import { Box } from '../../../../box'
import { DayLabels } from './day-labels'
import { RangeCell } from './range-cell'
import { RangeCalendarGridProps } from './types'

export const RangeCalendarGrid = ({ state, locale, offset = {} }: RangeCalendarGridProps) => {
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  const { gridProps, headerProps, weekDays } = useCalendarGrid({ startDate, endDate }, state)
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <Box h="245px" p="0">
      <chakra.table { ...gridProps } sx={ { borderSpacing: '0px' } }>
        <chakra.thead { ...headerProps }>
          <DayLabels weekDays={ weekDays } />
        </chakra.thead>
        <chakra.tbody>
          { times((weekIndex) => (
            <chakra.tr key={ weekIndex }>
              { state
                .getDatesInWeek(weekIndex, startDate)
                .map((date, i) =>
                  (date ? (
                    <RangeCell
                      key={ i as number }
                      state={ state }
                      date={ date }
                      currentMonth={ startDate }
                      locale={ locale }
                    />
                  ) : (
                    <chakra.td key={ i as number } />
                  ))
                ) }
            </chakra.tr>
          ), weeksInMonth + 1) }
        </chakra.tbody>
      </chakra.table>

    </Box>
  )
}
