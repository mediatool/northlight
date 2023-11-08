import React, { useState } from 'react'
import {
  ArrowCircleLeftDuo,
  ArrowCircleRightDuo,
  ChevronDownSolid,
  ChevronUpSolid,
} from '@northlight/icons'
import { equals } from 'ramda'
import { CalendarDate } from '@internationalized/date'
import { Lead, P } from '../../../../typography'
import { Clickable } from '../../../../clickable'
import { SlideFade } from '../../../../transitions'
import { HStack, Stack } from '../../../../stack'
import { Icon } from '../../../../icon'
import { ButtonRow } from './button-row'
import { AdjustRangeProps, Date, DateRangeValue, MoveDateByType } from './types'

export const AdjustRange = ({ state, adjust = 'start' }: AdjustRangeProps) => {
  const [ isOpen, setIsOpen ] = useState(false)

  const moveStartDateBy = (inp: MoveDateByType) => {
    if (state.value) {
      return {
        start: state.value.start.add(inp),
        end: state.value.end,
      }
    }
    return null
  }

  const moveEndDateBy = (inp: MoveDateByType) => {
    if (state.value) {
      return {
        start: state.value.start,
        end: state.value.end.add(inp),
      }
    }
    return null
  }

  const moveStartDayBack = {
    value: moveStartDateBy({ days: -1 }),
    label: 'Day',
  }

  const moveStartWeekBack = {
    value: moveStartDateBy({ weeks: -1 }),
    label: 'Week',
  }

  const moveStartMonthBack = {
    value: moveStartDateBy({ months: -1 }),
    label: 'Month',
  }

  const moveStartYearBack = {
    value: moveStartDateBy({ years: -1 }),
    label: 'Year',
  }

  const moveStartDayForward = {
    value: moveStartDateBy({ days: 1 }),
    label: 'Day',
  }

  const moveStartWeekForward = {
    value: moveStartDateBy({ weeks: 1 }),
    label: 'Week',
  }

  const moveStartMonthForward = {
    value: moveStartDateBy({ months: 1 }),
    label: 'Month',
  }

  const moveStartYearForward = {
    value: moveStartDateBy({ years: 1 }),
    label: 'Year',
  }

  const moveStartBack = [
    moveStartDayBack,
    moveStartWeekBack,
    moveStartMonthBack,
    moveStartYearBack,
  ]

  const moveStartForward = [
    moveStartDayForward,
    moveStartWeekForward,
    moveStartMonthForward,
    moveStartYearForward,
  ]

  const moveEndDayBack = {
    value: moveEndDateBy({ days: -1 }),
    label: 'Day',
  }

  const moveEndWeekBack = {
    value: moveEndDateBy({ weeks: -1 }),
    label: 'Week',
  }

  const moveEndMonthBack = {
    value: moveEndDateBy({ months: -1 }),
    label: 'Month',
  }

  const moveEndYearBack = {
    value: moveEndDateBy({ years: -1 }),
    label: 'Year',
  }

  const moveEndDayForward = {
    value: moveEndDateBy({ days: 1 }),
    label: 'Day',
  }

  const moveEndWeekForward = {
    value: moveEndDateBy({ weeks: 1 }),
    label: 'Week',
  }

  const moveEndMonthForward = {
    value: moveEndDateBy({ months: 1 }),
    label: 'Month',
  }

  const moveEndYearForward = {
    value: moveEndDateBy({ years: 1 }),
    label: 'Year',
  }

  const moveEndBack = [
    moveEndDayBack,
    moveEndWeekBack,
    moveEndMonthBack,
    moveEndYearBack,
  ]

  const moveEndForward = [
    moveEndDayForward,
    moveEndWeekForward,
    moveEndMonthForward,
    moveEndYearForward,
  ]

  const updateDate =
    (newDate: DateRangeValue, focusOnStart = true) =>
      () => {
        if (newDate) {
          state.setValue(newDate)
          state.setFocusedDate(
            focusOnStart
              ? newDate.start as CalendarDate
              : newDate.end as CalendarDate
          )
        }
      }

  const getMethodsStart = (date: Date) => ({
    onClick: updateDate(date.value, true),
  })

  const getMethodsEnd = (date: Date) => ({
    onClick: updateDate(date.value, false),
  })

  const showAdjust =
    state.value !== null &&
    state.highlightedRange !== null &&
    equals(state.value, state.highlightedRange)

  return (
    <Stack
      spacing={ 2 }
      visibility={
        showAdjust ? 'visible' : 'hidden'
      }
      pt="2"
    >
      <Clickable onClick={ () => setIsOpen((prev) => !prev) }>
        <HStack>
          <P variant="14">Adjust { adjust }</P>
          <Icon as={ isOpen ? ChevronUpSolid : ChevronDownSolid } size="xs" />
        </HStack>
      </Clickable>
      <SlideFade in={ isOpen } direction="top" hideDisplay={ true }>
        { adjust === 'start' && (
          <Stack minH="91px">
            <Lead sx={ { fontSize: '12px' } }>Move date by</Lead>
            <ButtonRow
              icon={ ArrowCircleLeftDuo }
              dates={ moveStartBack }
              getMethods={ getMethodsStart }
              state={ state }
            />
            <ButtonRow
              icon={ ArrowCircleRightDuo }
              dates={ moveStartForward }
              getMethods={ getMethodsStart }
              state={ state }
            />
          </Stack>
        ) }
        { adjust === 'end' && (
          <Stack minH="91px">
            <Lead sx={ { fontSize: '12px' } }>Move date by</Lead>
            <ButtonRow
              icon={ ArrowCircleLeftDuo }
              dates={ moveEndBack }
              getMethods={ getMethodsEnd }
              state={ state }
            />
            <ButtonRow
              icon={ ArrowCircleRightDuo }
              dates={ moveEndForward }
              getMethods={ getMethodsEnd }
              state={ state }
            />
          </Stack>
        ) }
      </SlideFade>
    </Stack>
  )
}
