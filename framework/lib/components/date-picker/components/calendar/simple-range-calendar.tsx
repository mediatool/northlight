import React, { useRef } from 'react'
import { GregorianCalendar } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useRangeCalendarState } from '@react-stately/calendar'
import { useRangeCalendar } from '@react-aria/calendar'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { ChevronLeftSolid, ChevronRightSolid } from '@northlight/icons'
import { RangeCalendarProps } from './types'
import { Button } from '../../../button'
import { Flex } from '../../../flex'
import { Box } from '../../../box'
import { MonthButton } from './components'
import { HStack, Stack } from '../../../stack'
import { Icon } from '../../../icon'
import { RangeCalendarGrid } from './components/range-grid'
import { QuickSelect } from './quick-navigation/quick-select'
import { MonthSelect, YearSelectRangeCalendar } from './date-select'

export const SimpleRangeCalendar = (props: RangeCalendarProps) => {
  const { locale } = useLocale()

  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: 1 },
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  const ref = useRef<HTMLDivElement>(null)
  const { rangeCalendarContainer } = useMultiStyleConfig('Calendar')

  const { calendarProps, prevButtonProps, nextButtonProps } = useRangeCalendar(
    props,
    state,
    ref
  )

  const { fiscalStartMonth, fiscalStartDay, handleClose, resetDate, isClearable = true } = props

  return (
    <Box { ...calendarProps } ref={ ref } __css={ rangeCalendarContainer }>
      <Stack>
        <Flex gap={ 4 }>
          <QuickSelect
            state={ state }
            updateVisibleRange={ () => {} }
            locale={ locale }
            fiscalStartMonth={ fiscalStartMonth }
            fiscalStartDay={ fiscalStartDay }
            height="72"
          />
          <Stack>
            <HStack spacing={ 2 } alignSelf="center">
              <MonthButton { ...prevButtonProps }>
                <Icon as={ ChevronLeftSolid } boxSize={ 4 } />
              </MonthButton>
              <HStack w="full" justify="center">
                <MonthSelect state={ state } offset={ 0 } />
                <YearSelectRangeCalendar state={ state } offset={ 0 } />
              </HStack>
              <MonthButton { ...nextButtonProps }>
                <Icon as={ ChevronRightSolid } boxSize={ 4 } />
              </MonthButton>
            </HStack>
            <Stack h="full" justify="space-between">
              <RangeCalendarGrid state={ state } locale={ locale } />
              <HStack alignSelf="end" pt="2">
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
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
}
