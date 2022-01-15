import React from 'react'
import { WeekDay } from '../types'
import { CALENDAR_PILL_SIZE, WEEKDAY_ABBREVIATION } from '../util'
import { Text } from '../../text'
import { Center } from '../../center'

interface Props {
  label: WeekDay
}

export const WeekDayLabel = ({
  label,
}: Props) => (
  <Center boxSize={ `${CALENDAR_PILL_SIZE}px` }>
    <Text size="sm" lineHeight={ 4 } color="gray.500">
      { label.substring(0, WEEKDAY_ABBREVIATION) }
    </Text>
  </Center>
)
