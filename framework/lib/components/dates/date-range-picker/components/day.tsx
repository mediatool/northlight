import React from 'react'
import { DateObj } from 'dayzed'
import { dayStateStyles, getDayState, useDateRangePickerContext } from '../util'
import { CALENDAR_PILL_SIZE } from '../../util'
import { Center } from '../../../center'

interface Props {
  day: DateObj
  dayzedDateProps: Record<string, any>
}

export const Day = ({ day, dayzedDateProps }: Props) => {
  const {
    state: { hoveredEndDate, selected },
    actions: { hoverDate, unHoverDate },
  } = useDateRangePickerContext()
  const [ from ] = selected

  // In order to compute different states of a full range, e.g when user is hovering
  // an end date, or has selected a full range, we need to differentiate between those.
  // This allows us to compute days that has an 'IN_RANGE' state while the user is hovering dates.
  // As well as when the user has selected a full range.
  const dayState = getDayState({
    day,
    selectedDateRange: selected,
    hoveredDateRange: [ from, hoveredEndDate ],
  })
  const sx = dayStateStyles[dayState]

  return (
    <Center
      boxSize={ `${CALENDAR_PILL_SIZE}px` }
      sx={ sx }
      onMouseEnter={ () => hoverDate(day.date) }
      onMouseLeave={ unHoverDate }
      fontWeight={ day.today ? 'semibold' : 'normal' }
      fontSize="16px"
      { ...dayzedDateProps }
    >
      { day.date.getDate() }
    </Center>
  )
}
