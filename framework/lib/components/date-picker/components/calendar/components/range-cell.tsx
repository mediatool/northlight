import React, { useRef } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarCell } from '@react-aria/calendar'
import { isSameMonth, today } from '@internationalized/date'
import { RangeCellProps } from './types'

export const RangeCell = ({ state, date, currentMonth }: RangeCellProps) => {
  const isOutsideMonth = !isSameMonth(currentMonth, date)
  if (isOutsideMonth) return <chakra.td />

  const ref = useRef<HTMLButtonElement>(null)
  const { cellProps, buttonProps, isSelected, formattedDate } = useCalendarCell(
    { date },
    state,
    ref
  )

  const isToday = date.compare(today(state.timeZone)) === 0

  return (
    <chakra.td { ...cellProps }>
      <chakra.button
        { ...buttonProps }
        ref={ ref }
        borderRadius="xs"
        bgColor={ isSelected ? 'blue.500' : 'transparent' }
        color={ isSelected ? 'text.inverted' : 'text.default' }
        fontSize="sm"
        ring={ isToday && !isSelected ? '1px' : '0px' }
        ringColor="blue.500"
        mx="-0a"
        my="0a"
        zIndex="docked"
        transition="none"
        w="8"
        h="8"
        fontWeight="medium"
        _focusVisible={ {
          outline: 'none',
          ring: '2px',
          ringColor: 'border.wcag',
          ringOffset: '1px',
        } }
        _hover={ {
          bgColor: isSelected ? 'blue.400' : 'gray.50',
          _disabled: {
            bgColor: 'transparent',
          },
        } }
        _disabled={ {
          opacity: 0.3,
        } }
      >
        { formattedDate }
      </chakra.button>
    </chakra.td>
  )
}
