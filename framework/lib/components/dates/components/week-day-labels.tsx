import React from 'react'
import { WeekDayLabel } from './week-day-label'
import { FirstDayOfWeek, mondayFirstWeekDays, sundayFirstWeekDays } from '../util'
import { Flex } from '../../flex'

interface Props {
  firstDayOfWeek?: FirstDayOfWeek
}

export const WeekDayLabels = ({
  firstDayOfWeek = 0,
}: Props) => {
  const labels = firstDayOfWeek === 0
    ? sundayFirstWeekDays
    : mondayFirstWeekDays

  return (
    <Flex alignItems="center">
      { labels.map((label) => (
        <WeekDayLabel key={ label } label={ label } />
      )) }
    </Flex>
  )
}
