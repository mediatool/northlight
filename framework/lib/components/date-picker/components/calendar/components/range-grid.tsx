import React from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarGrid } from '@react-aria/calendar'
import { endOfMonth, getWeeksInMonth } from '@internationalized/date'
import { Table, Tbody, Thead, Tr } from '../../../../table'
import { Box } from '../../../../box'
import { DayLabels } from './day-labels'
import { RangeCell } from './range-cell'
import { RangeCalendarGridProps } from './types'
import { arrayWithLength } from '../../../../../utils'

export const RangeCalendarGrid = ({ state, locale, offset = {} }: RangeCalendarGridProps) => {
  const startDate = state.visibleRange.start.add(offset)
  const endDate = endOfMonth(startDate)

  const { gridProps, headerProps, weekDays } = useCalendarGrid({ startDate, endDate }, state)
  const weeksInMonth = getWeeksInMonth(state.visibleRange.start, locale)

  return (
    <Box h="245px" p="0">
      <Table variant="unstyled" { ...gridProps }>
        <Thead { ...headerProps }>
          <DayLabels weekDays={ weekDays } />
        </Thead>
        <Tbody>
          { arrayWithLength(weeksInMonth + 1).map((weekIndex) => (
            <Tr key={ weekIndex }>
              { state
                .getDatesInWeek(weekIndex, startDate)
                .map((date, i) =>
                  (date ? (
                    <RangeCell
                      key={ date.day }
                      state={ state }
                      date={ date }
                      currentMonth={ startDate }
                      locale={ locale }
                    />
                  ) : (
                    <chakra.td key={ i as number } />
                  ))
                ) }
            </Tr>
          )) }
        </Tbody>
      </Table>

    </Box>
  )
}
