/* eslint-disable react/no-array-index-key */
import React, { ReactNode } from 'react'
import { DateObj } from 'dayzed'
import { Stack } from '../../stack'
import { Flex } from '../../flex'

interface Props {
  weeks: (string | DateObj)[][]
  day: (day: string | DateObj, index: number) => ReactNode
}

export const Weeks = ({
  weeks,
  day,
}: Props) => (
  <Stack spacing={ 0 }>
    { weeks.map((week, weekIndex) => (
      <Flex alignItems="center" key={ weekIndex }>
        { week.map((d, dayIndex) => day(d, dayIndex)) }
      </Flex>
    )) }
  </Stack>
)
