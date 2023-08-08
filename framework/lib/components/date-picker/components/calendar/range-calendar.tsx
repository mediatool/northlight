import React, { useEffect, useRef, useState } from 'react'
import { GregorianCalendar } from '@internationalized/date'
import { useLocale } from '@react-aria/i18n'
import { useRangeCalendarState } from '@react-stately/calendar'
import { useRangeCalendar } from '@react-aria/calendar'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { ChevronLeftSolid, ChevronRightSolid, ChevronSelectorVerticalSolid } from '@northlight/icons'
import { RangeCalendarProps } from './types'
import { Button } from '../../../button'
import { Label } from '../../../typography'
import { AdjustRange } from './quick-navigation/adjust-range'
import { Flex } from '../../../flex'
import { Box } from '../../../box'
import { MonthButton } from './components'
import { HStack, Stack } from '../../../stack'
import { Icon } from '../../../icon'
import { RangeCalendarGrid } from './components/range-grid'
import { QuickSelect } from './quick-navigation/quick-select'
import { months } from './constants'
import { MonthSelect } from './date-select/month-select'
import { YearSelectRangeCalendar } from './date-select'

export const RangeCalendar = (props: RangeCalendarProps) => {
  const { locale } = useLocale()

  /*
    when setting custom focusedDate with visibleDuration > 1
    it does not update visibleRange accordingly,
    this boolean updateRange switches value of visibleDuration to 1,
    to compute visibleRange accurately, and then switch back to update UI
  */
  const [ updateRange, setUpdateRange ] = useState(false)

  const state = useRangeCalendarState({
    ...props,
    visibleDuration: { months: updateRange ? 1 : 2 },
    locale,
    createCalendar: () => new GregorianCalendar(),
  })

  useEffect(() => {
    if (updateRange) {
      setUpdateRange(false)
    }
  }, [ updateRange ])

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
            updateVisibleRange={ () => setUpdateRange(true) }
            locale={ locale }
            fiscalStartMonth={ fiscalStartMonth }
            fiscalStartDay={ fiscalStartDay }
          />
          <Stack>
            <HStack spacing={ 2 } alignSelf="center">
              <MonthButton { ...prevButtonProps }>
                <Icon as={ ChevronLeftSolid } boxSize={ 4 } />
              </MonthButton>
              <Box w="52">
                <Label textAlign="center">
                  { months[state.visibleRange.start.month - 1] } -{ ' ' }
                  { months[state.visibleRange.start.month] }
                  { ' ' }
                  { state.visibleRange.end.year }
                </Label>
              </Box>
              <MonthButton { ...nextButtonProps }>
                <Icon as={ ChevronRightSolid } boxSize={ 4 } />
              </MonthButton>
            </HStack>
            <HStack alignItems="start" spacing={ 4 }>
              <Stack>
                <HStack alignSelf="center" spacing="0a">
                  <MonthSelect state={ state } offset={ 0 } />
                  <YearSelectRangeCalendar state={ state } offset={ 0 } />
                  <Icon as={ ChevronSelectorVerticalSolid } size="xs" fontWeight="bold" />
                </HStack>
                <RangeCalendarGrid state={ state } locale={ locale } />
                <AdjustRange state={ state } adjust="start" />
              </Stack>
              <Stack>
                <HStack alignSelf="center" spacing="0a">
                  <MonthSelect state={ state } offset={ 1 } />
                  <YearSelectRangeCalendar state={ state } offset={ 1 } />
                  <Icon as={ ChevronSelectorVerticalSolid } size="xs" fontWeight="bold" />
                </HStack>
                <RangeCalendarGrid
                  state={ state }
                  offset={ { months: 1 } }
                  locale={ locale }
                />
                <AdjustRange state={ state } adjust="end" />
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
            </HStack>
          </Stack>
        </Flex>
      </Stack>
    </Box>
  )
}
