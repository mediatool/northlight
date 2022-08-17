import React from 'react'
import { DateValue, GregorianCalendar } from '@internationalized/date'
import { Box, Flex, useMultiStyleConfig } from '@chakra-ui/react'
import { useLocale } from '@react-aria/i18n'
import { useCalendarState } from '@react-stately/calendar'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { CalendarProps, useCalendar } from '@react-aria/calendar'
import { CalendarGrid, MonthButton, YearSelect } from './components'
import { HStack, Stack } from '../stack'

export const Calendar = (props:CalendarProps<DateValue>) => {
  const { locale } = useLocale()
  const { container } = useMultiStyleConfig('Calendar')

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  const {
    calendarProps,
    prevButtonProps,
    nextButtonProps,
  } = useCalendar(props, state)

  return (
    <Box { ...calendarProps } __css={ container }>
      <Stack>
        <Flex justifyContent="space-between">
          <YearSelect state={ state } />
          <HStack spacing={ 2 }>
            <MonthButton { ...prevButtonProps }>
              <ChevronLeftIcon />
            </MonthButton>
            <MonthButton { ...nextButtonProps }>
              <ChevronRightIcon />
            </MonthButton>
          </HStack>
        </Flex>
        <CalendarGrid state={ state } locale={ locale } />
      </Stack>
    </Box>
  )
}
