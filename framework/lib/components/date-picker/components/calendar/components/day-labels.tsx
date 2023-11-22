import React, { memo } from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/system'
import { DayLabelsProps } from './types'

export const DayLabels = memo(({
  weekDays,
}: DayLabelsProps) => {
  const { dayLabel } = useMultiStyleConfig('Calendar')
  const weekDaysWithIds = weekDays.map((day, i) => ({ label: day, _id: i }))

  return (
    <chakra.tr>
      <chakra.th />
      { weekDaysWithIds.map(({ label, _id }) => (
        <chakra.th key={ _id } __css={ dayLabel }>
          { label }
        </chakra.th>
      )) }
    </chakra.tr>
  )
})
