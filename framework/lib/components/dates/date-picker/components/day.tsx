import React from 'react'
import { DateObj } from 'dayzed'
import { dayStyles, getDayState, useDatePickerState } from '../util'
import { CALENDAR_PILL_SIZE } from '../../util'
import { Center } from '../../../center'

interface Props {
  day: DateObj
}

export const Day = ({ day }: Props) => {
  const { dayzed } = useDatePickerState()

  const dayState = getDayState(day)
  const sx = dayStyles[dayState]

  return (
    <Center
      rounded="full"
      boxSize={ `${CALENDAR_PILL_SIZE}px` }
      sx={ sx }
      { ...dayzed.getDateProps({ dateObj: day }) }
    >
      { day.date.getDate() }
    </Center>
  )
}
