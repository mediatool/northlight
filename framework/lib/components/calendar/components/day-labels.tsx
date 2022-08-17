import React, { memo } from 'react'
import { chakra, useMultiStyleConfig } from '@chakra-ui/system'
import { Tr } from '../../table'

export const DayLabels = memo(({ weekDays }: { weekDays: string[] }) => {
  const { dayLabel } = useMultiStyleConfig('Calendar')
  const weekDaysWithIds = weekDays.map((day, i) => ({ label: day, _id: i }))

  return (
    <Tr>
      { weekDaysWithIds.map(({ label, _id }) => (
        <chakra.th key={ _id } __css={ dayLabel }>
          { label }
        </chakra.th>
      )) }
    </Tr>
  )
})
