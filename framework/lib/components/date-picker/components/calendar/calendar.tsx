import React from 'react'
import { GregorianCalendar } from '@internationalized/date'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { useLocale } from '@react-aria/i18n'
import { useCalendarState } from '@react-stately/calendar'
import { useCalendar } from '@react-aria/calendar'
import { ChevronLeftSolid, ChevronRightSolid } from '@northlight/icons'
import { Flex } from '../../../flex'
import { Box } from '../../../box'
import { CalendarGrid, MonthButton } from './components'
import { HStack, Stack } from '../../../stack'
import { Icon } from '../../../icon'
import { YearSelectCalendar } from './date-select'
import { CalendarProps } from './types'

export const Calendar = (props: CalendarProps) => {
  const { firstDayOfWeek } = props
  const { locale } = useLocale()
  const { container } = useMultiStyleConfig('Calendar')

  const state = useCalendarState({
    ...props,
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  const { calendarProps, prevButtonProps, nextButtonProps } = useCalendar(
    props,
    state
  )

  return (
    <Box { ...calendarProps } __css={ container }>
      <Stack>
        <Flex justifyContent="space-between">
          <Box paddingInlineStart="2">
            <YearSelectCalendar state={ state } />
          </Box>
          <HStack spacing={ 2 }>
            <MonthButton { ...prevButtonProps }>
              <Icon as={ ChevronLeftSolid } boxSize={ 4 } />
            </MonthButton>
            <MonthButton { ...nextButtonProps }>
              <Icon as={ ChevronRightSolid } boxSize={ 4 } />
            </MonthButton>
          </HStack>
        </Flex>
        <CalendarGrid
          state={ state }
          locale={ locale }
          firstDayOfWeek={ firstDayOfWeek }
        />
      </Stack>
    </Box>
  )
}
