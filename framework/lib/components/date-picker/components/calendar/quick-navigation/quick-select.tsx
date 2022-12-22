import React from 'react'
import {
  CalendarDate,
  endOfMonth,
  endOfWeek,
  endOfYear,
  startOfMonth,
  startOfWeek,
  startOfYear,
  today,
} from '@internationalized/date'
import { any, equals, map } from 'ramda'
import { palette } from '@mediatool/tokens'
import { Flex } from '../../../../flex'
import { Stack } from '../../../../stack'
import { Box } from '../../../../box'
import { DateButton } from './date-button'
import { validRange } from './utils'
import { Date, DateRangeValue, QuickSelectProps } from './types'

export const QuickSelect = ({
  state,
  fiscalStartMonth = 0,
  updateVisibleRange,
  locale = '',
}: QuickSelectProps) => {
  const thisDay = today(state.timeZone)

  const thisWeek = {
    value: {
      start: startOfWeek(thisDay, locale),
      end: endOfWeek(thisDay, locale),
    },
    label: 'This Week',
  }

  const lastWeek = {
    value: {
      start: startOfWeek(thisDay.subtract({ weeks: 1 }), locale),
      end: endOfWeek(thisDay.subtract({ weeks: 1 }), locale),
    },
    label: 'Last Week',
  }

  const thisMonth = {
    value: {
      start: startOfMonth(thisDay),
      end: endOfMonth(thisDay),
    },
    label: 'This month',
  }

  const lastMonth = {
    value: {
      start: startOfMonth(thisDay.subtract({ months: 1 })),
      end: endOfMonth(thisDay.subtract({ months: 1 })),
    },
    label: 'Last Month',
  }

  const thisYear = {
    value: {
      start: startOfYear(thisDay),
      end: endOfYear(thisDay),
    },
    label: 'This Year',
  }

  const lastYear = {
    value: {
      start: startOfYear(thisDay.subtract({ years: 1 })),
      end: endOfYear(thisDay.subtract({ years: 1 })),
    },
    label: 'Last Year',
  }

  const nextMonth = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 1 })),
    },
    label: 'Next Month',
  }

  const nextThreeMonths = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 3 })),
    },
    label: 'Next 3 Months',
  }

  const nextSixMonths = {
    value: {
      start: startOfMonth(thisDay.add({ months: 1 })),
      end: endOfMonth(thisDay.add({ months: 6 })),
    },
    label: 'Next 6 Months',
  }

  const nextYear = {
    value: {
      start: startOfYear(thisDay.add({ years: 1 })),
      end: endOfYear(thisDay.add({ years: 1 })),
    },
    label: 'Next Year',
  }

  const thisFiscalYear = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 11 })
      ),
    },
    label: 'This Fiscal Year',
  }

  const lastFiscalYear = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay)
          .add({ months: fiscalStartMonth })
          .subtract({ years: 1 })
      ),
      end: endOfMonth(
        startOfYear(thisDay)
          .add({ months: fiscalStartMonth + 11 })
          .subtract({ years: 1 })
      ),
    },
    label: 'Last Fiscal Year',
  }

  const F1 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 2 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q1' : 'FQ1',
  }

  const F2 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 3 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 5 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q2' : 'FQ2',
  }

  const F3 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 6 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 8 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q3' : 'FQ3',
  }

  const F4 = {
    value: {
      start: startOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 9 })
      ),
      end: endOfMonth(
        startOfYear(thisDay).add({ months: fiscalStartMonth + 11 })
      ),
    },
    label: fiscalStartMonth === 0 ? 'Q4' : 'FQ4',
  }

  const fiscalQuarters = [ F1, F2, F3, F4 ]
  const fiscalYears = fiscalStartMonth === 0
    ? []
    : [ thisFiscalYear, lastFiscalYear ]

  const quickDates = [
    thisWeek,
    lastWeek,
    thisMonth,
    lastMonth,
    thisYear,
    lastYear,
    nextMonth,
    nextThreeMonths,
    nextSixMonths,
    nextYear,
    ...fiscalYears,
  ]

  const updateDate = (newDate: DateRangeValue) => () => {
    if (newDate) {
      state.setValue(newDate)
      state.setFocusedDate(newDate.start as CalendarDate)
      updateVisibleRange()
    }
  }

  const getIsActive = (newDate: Date) => equals(state.value, newDate.value)

  const getMethods = (date: Date) => ({
    onClick: updateDate(date.value),
  })

  const seperator = `1px solid ${palette.gray['100']}`
  const shouldShow = ((dates: Date[]) => (any((date) => validRange(date.value, state), dates)))

  return (
    <Stack
      alignItems="start"
      borderRight={ seperator }
      pt="2"
    >
      <Stack
        h="xs"
        overflowY="hidden"
        spacing={ 4 }
        pr="4"
        _hover={ { overflowY: 'scroll' } }
        w="36"
        display={ shouldShow(quickDates) ? 'initial' : 'none' }
        mb="4"
      >
        { map(
          (quickDate) =>
            validRange(quickDate.value, state) && (
              <Box minH="20px" key={ `quick-select-${quickDate.label}` }>
                <DateButton
                  { ...getMethods(quickDate) }
                  isActive={ getIsActive(quickDate) }
                >
                  { quickDate.label }
                </DateButton>
              </Box>
            ),
          quickDates
        ) }
      </Stack>
      <Box w="50%" borderTop={ seperator } display={ shouldShow(fiscalQuarters) ? 'initial' : 'none' } />
      <Flex
        justifyContent="space-between"
        w="full"
        pt="2"
        pr="4"
        display={ shouldShow(fiscalQuarters) ? 'flex' : 'none' }
      >
        { map(
          (quarter) => validRange(quarter.value, state) && (
            <DateButton
              { ...getMethods(quarter) }
              isActive={ getIsActive(quarter) }
              key={ `quick-select-${quarter.label}` }
            >
              { quarter.label }
            </DateButton>
          ),
          fiscalQuarters
        ) }
      </Flex>
    </Stack>
  )
}
