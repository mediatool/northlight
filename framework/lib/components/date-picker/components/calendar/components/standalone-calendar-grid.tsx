import React, { useMemo } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendar, useCalendarGrid } from '@react-aria/calendar'
import { getDayOfWeek, getWeeksInMonth } from '@internationalized/date'
import { times } from 'ramda'
import { useLocale } from '@react-aria/i18n'
import { CalendarState } from '@react-stately/calendar'
import { ChevronLeftSolid, ChevronRightSolid } from '@northlight/icons'
import { DayLabels } from './day-labels'
import { Box } from '../../../../box'
import { HStack, Stack } from '../../../../stack'
import { Flex } from '../../../../flex'
import { Icon } from '../../../../icon'
import { Small } from '../../../../typography'
import { MonthSelect, YearSelectRangeCalendar } from '../date-select'
import { MonthButton } from './month-button'
import { getWeekNumberAtStartOfMonth } from './get-week-number-start-of-month'
import { RangeCell } from './range-cell'
import { DateRangeValue } from '../quick-navigation/types'

interface StandaloneCalendarGridProps {
  state: CalendarState
  range: DateRangeValue | undefined
}

export const StandaloneCalendarGrid = ({
  state,
  range,
  ...rest
}: StandaloneCalendarGridProps) => {
  const { locale } = useLocale()
  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    {},
    state
  )
  const startDate = state.visibleRange.start
  const { gridProps, headerProps, weekDays } = useCalendarGrid(rest, state)
  const weeksInMonth = getWeeksInMonth(startDate, locale)
  const weekNumberStart = useMemo(
    () =>
      getWeekNumberAtStartOfMonth(
        startDate.year,
        startDate.month,
        getDayOfWeek(startDate, locale)
      ),
    [ startDate.year, startDate.month ]
  )

  return (
    <Box { ...calendarProps } h="265px" p="0">
      <Stack>
        <Flex justify="space-between" w="full" p="1" alignItems="center">
          <MonthButton { ...prevButtonProps }>
            <Icon as={ ChevronLeftSolid } boxSize={ 4 } />
          </MonthButton>
          <HStack spacing="0">
            <MonthSelect state={ state } />
            <YearSelectRangeCalendar state={ state } />
          </HStack>
          <MonthButton { ...nextButtonProps }>
            <Icon as={ ChevronRightSolid } boxSize={ 4 } />
          </MonthButton>
        </Flex>
        <chakra.table { ...gridProps } sx={ { borderSpacing: '0' } }>
          <chakra.thead { ...headerProps }>
            <DayLabels weekDays={ weekDays } />
          </chakra.thead>
          <chakra.tbody>
            { times(
              (weekIndex) => {
                const weekNumber = weekNumberStart + weekIndex

                return (
                  <chakra.tr key={ weekIndex }>
                    <chakra.td>
                      <Small sx={ { color: 'text.subdued' } } pr="2">
                        w.
                        { weekNumber > 52
                          ? weekNumber - 52
                          : weekNumber }
                      </Small>
                    </chakra.td>
                    { state
                      .getDatesInWeek(weekIndex, startDate)
                      .map((date) =>
                        (date ? (
                          <RangeCell
                            key={ date.day }
                            state={ state }
                            range={ range }
                            date={ date }
                            currentMonth={ startDate }
                          />
                        ) : (
                          <chakra.td />
                        ))
                      ) }
                  </chakra.tr>
                )
              },
              weeksInMonth
            ) }
          </chakra.tbody>
        </chakra.table>
      </Stack>
    </Box>
  )
}
