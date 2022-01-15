import React from 'react'
import { WeekDay } from '../types'
import { HStack } from '../../stack'
import { WeekDayLabel } from './week-day-label'

interface Props {
  labels: WeekDay[]
}

export const WeekDayLabels = ({
  labels,
}: Props) => (
  <HStack>
    { labels.map((label) => (
      <WeekDayLabel key={ label } label={ label } />
    )) }
  </HStack>
)
