import React, { useMemo } from 'react'
import { any, equals, map } from 'ramda'
import { palette } from '@northlight/tokens'
import { Flex, Spacer } from '../../../../flex'
import { Stack } from '../../../../stack'
import { Box } from '../../../../box'
import { DateButton } from './date-button'
import { validRange } from './utils'
import { Date, DateRangeValue, QuickSelectProps } from './types'
import { getQuickSelectOptions } from './get-quick-select-options'

const seperator = `1px solid ${palette.gray['100']}`

export const QuickSelect = ({
  state,
  fiscalStartMonth = 0,
  fiscalStartDay = 0,
  locale = '',
  height = '17.5rem',
}: QuickSelectProps) => {
  const { quickDates, fiscalQuarters, fiscalSemesters } = useMemo(
    () => getQuickSelectOptions(state, locale, fiscalStartMonth, fiscalStartDay),
    []
  )

  const updateDate = (newDate: DateRangeValue) => () => {
    if (newDate) {
      state.setValue(newDate)
      state.setFocusedDateRange(newDate)
    }
  }

  const getIsActive = (newDate: Date) => equals(state.value, newDate.value)

  const shouldShow = (dates: Date[]) =>
    any((date) => validRange(date.value, state), dates)

  return (
    <Stack alignItems="start" borderRight={ seperator } pt="2">
      <Stack
        h={ height }
        overflowY="hidden"
        pr="4"
        _hover={ { overflowY: 'scroll' } }
        w="36"
        display={ shouldShow(quickDates) ? 'initial' : 'none' }
      >
        { map(
          (quickDate) =>
            validRange(quickDate.value, state) && (
              <Box minH="20px" key={ `quick-select-${quickDate.label}` }>
                <DateButton
                  onClick={ updateDate(quickDate.value) }
                  isActive={ getIsActive(quickDate) }
                >
                  { quickDate.label }
                </DateButton>
              </Box>
            ),
          quickDates
        ) }
      </Stack>
      <Box
        w="50%"
        borderTop={ seperator }
        display={ shouldShow(fiscalQuarters) ? 'initial' : 'none' }
      />
      <Spacer />
      <Flex
        justifyContent="space-around"
        w="full"
        pt="2"
        pr="4"
        display={ shouldShow(fiscalSemesters) ? 'flex' : 'none' }
      >
        { map(
          (semester) =>
            validRange(semester.value, state) && (
              <DateButton
                onClick={ updateDate(semester.value) }
                isActive={ getIsActive(semester) }
                key={ `quick-select-${semester.label}` }
              >
                { semester.label }
              </DateButton>
            ),
          fiscalSemesters
        ) }
      </Flex>
      <Flex
        justifyContent="space-around"
        w="full"
        pt={ shouldShow(fiscalSemesters) ? '0' : '2' }
        pr="4"
        display={ shouldShow(fiscalQuarters) ? 'flex' : 'none' }
      >
        { map(
          (quarter) =>
            validRange(quarter.value, state) && (
              <DateButton
                onClick={ updateDate(quarter.value) }
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
