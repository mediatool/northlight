import React from 'react'
import { CALENDAR_PILL_SIZE, WEEKDAY_ABBREVIATION, WeekDay } from '../util'
import { Text } from '../../text'
import { Center } from '../../center'

interface Props {
  label: WeekDay
}

export const WeekDayLabel = ({
  label,
}: Props) => (
  <Center boxSize={ `${CALENDAR_PILL_SIZE}px` }>
    <Text
      size="sm"
      lineHeight={ 4 }
      color="mediatoolBlue.500"
      fontWeight="bold"
    >
      { label.substring(0, WEEKDAY_ABBREVIATION) }
    </Text>
  </Center>
)
