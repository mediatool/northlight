import React, { useRef } from 'react'
import { chakra } from '@chakra-ui/react'
import { useCalendarCell } from '@react-aria/calendar'
import { isSameMonth, today } from '@internationalized/date'
import { CalendarCellProps } from '../../../types'
import { Button } from '../../button'

export const CalendarCell = ({ state, date, currentMonth }: CalendarCellProps) => {
  const ref = useRef<HTMLButtonElement>(null)
  const {
    cellProps,
    buttonProps,
    isSelected,
    formattedDate,
  } = useCalendarCell({ date }, state, ref)
  const isToday = date.compare(today(state.timeZone)) === 0

  const isOutsideMonth = !isSameMonth(currentMonth, date)

  return (
    <chakra.td { ...cellProps }>
      <Button
        { ...buttonProps }
        ref={ ref }
        rounded="full"
        boxSize={ 8 }
        hidden={ isOutsideMonth }
        size="sm"
        fontWeight="medium"
        variant={ isSelected ? 'brand' : 'ghost' }
        borderWidth={ isToday ? '1px' : 'none' }
      >
        { formattedDate }
      </Button>
    </chakra.td>
  )
}
