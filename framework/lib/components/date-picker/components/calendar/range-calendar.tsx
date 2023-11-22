import React, { useRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { identity } from 'ramda'
import { useLocale } from '@react-aria/i18n'
import { useCalendarState } from '@react-stately/calendar'
import { CalendarDate, GregorianCalendar } from '@internationalized/date'
import { RangeCalendarProps } from './types'
import { Button } from '../../../button'
import { Label } from '../../../typography'
import { Flex } from '../../../flex'
import { Box } from '../../../box'
import { StandaloneCalendarGrid } from './components'
import { HStack, Stack } from '../../../stack'
import { DateRangeValue } from './quick-navigation/types'
import { QuickSelect } from './quick-navigation/quick-select'

const focusRing = {
  borderWidth: 'xs',
  borderRadius: 'md',
  borderColor: 'border.brand.hover',
  borderStyle: 'solid',
}

export const RangeCalendar = (props: RangeCalendarProps) => {
  const {
    onChange: setRange = identity,
    value,
    handleClose,
    resetDate,
    isClearable = true,
    fiscalStartMonth,
    fiscalStartDay,
    minValue,
    maxValue,
  } = props

  const { locale } = useLocale()

  const ref = useRef<HTMLDivElement>(null)
  const { rangeCalendarContainer } = useMultiStyleConfig('Calendar')

  const calendarOneState = useCalendarState({
    value: value && value.start ? value.start : null,
    minValue,
    maxValue,
    onChange: (newVal) => {
      setRange({
        end: value && value.end && newVal <= value.end ? value.end : newVal,
        start: newVal,
      })
    },
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  const calendarTwoState = useCalendarState({
    value: value && value.end ? value.end : null,
    minValue,
    maxValue,
    onChange: (newVal) => {
      setRange({
        start: value && value.end && value.start <= newVal ? value.start : newVal,
        end: newVal,
      })
    },
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  const focusDateRange = (dateRange: DateRangeValue) => {
    if (dateRange && dateRange.start && dateRange.end) {
      calendarOneState.setFocusedDate(dateRange.start as CalendarDate)
      calendarTwoState.setFocusedDate(dateRange.end as CalendarDate)
    }
  }

  const state = {
    setValue: setRange,
    setFocusedDateRange: focusDateRange,
    value,
    timeZone: calendarOneState.timeZone,
    minValue,
    maxValue,
  }

  const focusedStartMonthProps = value && value.start ? {} : focusRing

  return (
    <Box ref={ ref } __css={ rangeCalendarContainer }>
      <Stack>
        <Flex gap={ 4 }>
          <QuickSelect
            state={ state }
            locale={ locale }
            fiscalStartMonth={ fiscalStartMonth }
            fiscalStartDay={ fiscalStartDay }
          />
          <Stack>
            <HStack alignItems="start" spacing={ 8 } h="full" pt="2">
              <Stack h="full" { ...focusedStartMonthProps }>
                <Box p="2">
                  <Label size="xs">Start date:</Label>
                  <StandaloneCalendarGrid
                    state={ calendarOneState }
                    range={ value }
                  />
                </Box>
              </Stack>
              <Stack h="full" justify="space-between">
                <Stack opacity={ value && value.start ? '1' : '0.4' }>
                  <Box p="2">
                    <Label size="xs">End date:</Label>
                    <StandaloneCalendarGrid
                      state={ calendarTwoState }
                      range={ value }
                    />
                  </Box>
                </Stack>
                <HStack pt="2" alignSelf="end">
                  { isClearable && (
                    <Button onClick={ resetDate } variant="ghost" size="sm">
                      Clear
                    </Button>
                  ) }
                  <Button variant="brand" onClick={ handleClose } size="sm">
                    Save
                  </Button>
                </HStack>
              </Stack>
            </HStack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
}
