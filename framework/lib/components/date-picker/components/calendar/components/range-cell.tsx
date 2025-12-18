import React, { useRef } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarCell } from '@react-aria/calendar'
import { isSameMonth, today } from '@internationalized/date'
import { equals } from 'ramda'
import { RangeCellProps } from './types'

export const RangeCell = ({
  state,
  date,
  currentMonth,
  range,
}: RangeCellProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const {
    cellProps,
    buttonProps,
    isSelected: baseIsSelected,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)

  const isOutsideMonth = !isSameMonth(currentMonth, date)

  if (isOutsideMonth) return <chakra.td />

  const isToday = date.compare(today(state.timeZone)) === 0

  const isHighlighted = range && date < range.end && date > range.start

  const isSelected =
    range &&
    !isHighlighted &&
    (equals(date, range.start) || equals(date, range.end))

  return (
    <chakra.td { ...cellProps }>
      <chakra.button
        { ...buttonProps }
        type="button"
        ref={ ref }
        borderRadius="xs"
        bgColor={
          isHighlighted ? 'brand-alt' : isSelected ? 'brand' : 'transparent'
        }
        color={ isSelected ? 'text.inverted' : 'text.default' }
        fontSize="sm"
        ring={ isToday && !isSelected ? '1px' : '0px' }
        ringColor="brand"
        mx="-1px"
        ml={ isToday ? '-2px ' : undefined }
        my="0a"
        w="8"
        h="8"
        fontWeight="medium"
        opacity={ isSelected && !baseIsSelected ? '0.4' : '1' }
        _focusVisible={ {
          outline: 'none',
          ring: '2px',
          ringColor: 'border.wcag',
          ringOffset: '1px',
        } }
        _hover={ {
          bgColor: isSelected ? ' background.button.brand-hover' : 'bg.filled',
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
