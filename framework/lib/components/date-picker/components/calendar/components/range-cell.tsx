import React, { useRef } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarCell } from '@react-aria/calendar'
import {
  endOfMonth,
  endOfWeek,
  isSameMonth,
  startOfMonth,
  today,
} from '@internationalized/date'
import { palette } from '@mediatool/tokens'
import { equals } from 'ramda'
import { Box } from '../../../../box'
import { RangeCellProps } from './types'
import { Button } from '../../../../button'

export const RangeCell = ({
  state,
  date,
  currentMonth,
  locale,
}: RangeCellProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const { cellProps, buttonProps, isSelected, formattedDate } = useCalendarCell(
    { date },
    state,
    ref
  )

  const isHighlighted =
    state.highlightedRange &&
    state.highlightedRange.start < date &&
    date < state.highlightedRange.end

  const isBreakingDate =
    equals(endOfWeek(date, locale), date) || equals(endOfMonth(date), date)

  const isToday = date.compare(today(state.timeZone)) === 0

  const isOutsideMonth = !isSameMonth(currentMonth, date)

  const isFirst =
    state.highlightedRange &&
    equals(state.highlightedRange.start, date) &&
    !equals(state.highlightedRange.end, date)

  return (
    <chakra.td { ...cellProps }>
      <Button
        { ...buttonProps }
        ref={ ref }
        hidden={ isOutsideMonth }
        rounded={ isHighlighted ? 'xs' : 'full' }
        variant={ isSelected ? 'brand' : 'ghost' }
        borderWidth={ isToday ? '1px' : 'none' }
        borderColor={ isHighlighted ? 'transparent' : 'gray.50' }
        bgColor={ isHighlighted ? 'gray.50' : undefined }
        color={ isHighlighted ? 'text.default' : undefined }
        position="relative"
        my="2px"
        zIndex="docked"
        transition="none"
        w="32px"
        h="28px"
        size="sm"
        fontWeight="medium"
        boxShadow={
          isFirst && !isBreakingDate
            ? `12px 0 0 0px ${palette.gray['50']}`
            : 'none'
        }
        _focusVisible={
          isFirst && !isBreakingDate
            ? {}
            : {
              outline: 'none',
              ring: '2px',
              ringColor: 'border.wcag',
              ringOffset: isHighlighted ? '0px' : '1px',
            }
        }
        _hover={ {
          bgColor: isHighlighted
            ? 'gray.100'
            : isSelected
              ? 'blue.400'
              : 'gray.50',
        } }
      >
        <Box
          h="full"
          zIndex="base"
          position="absolute"
          top="50%"
          transform="translateY(-50%)"
          w="full"
          boxShadow={
            isHighlighted &&
            !isBreakingDate && (
              equals(startOfMonth(date), date) ||
              !equals(state.focusedDate, date)
            )
              ? `10px 0 0 0px ${palette.gray['50']}`
              : 'none'
          }
        />
        { formattedDate }
      </Button>
    </chakra.td>
  )
}
