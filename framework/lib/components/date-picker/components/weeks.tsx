/* eslint-disable react/no-array-index-key */
import React from 'react'
import { DateObj } from 'dayzed'
import { Day } from './day'
import { HStack, Stack } from '../../stack'

interface Props {
  weeks: (string | DateObj)[][]
}

export const Weeks = ({ weeks }: Props) => (
  <Stack spacing={ 1 }>
    { weeks.map((week, weekIndex) => (
      <HStack key={ weekIndex }>
        { week.map((day, dayIndex) => (
          <Day key={ `${weekIndex}-${dayIndex}` } day={ day } />
        )) }
      </HStack>
    )) }
  </Stack>
)
