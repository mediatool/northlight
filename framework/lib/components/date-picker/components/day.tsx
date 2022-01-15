import React from 'react'
import { DateObj } from 'dayzed'
import { BlankDay } from './blank-day'
import { CALENDAR_PILL_SIZE, dayStyles, getDayState, useDatePickerState } from '../util'
import { Center } from '../../center'

interface Props {
  day: string | DateObj
}

export const Day = ({ day }: Props) => {
  if (typeof day === 'string') {
    return <BlankDay />
  }

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
