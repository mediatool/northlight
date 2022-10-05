import React from 'react'
import {
  HStack,
  Stat,
  StatLabel,
  StatNumber,
} from '../../../../lib/components'
import { GetRating } from '../get-rating'

type Props = {
  averageRenderTime: number
  rerenderTimes: number
}

export const RenderData = ({ averageRenderTime, rerenderTimes }: Props) => (
  <HStack align="start">
    <Stat>
      <StatLabel>Average Rerender time: </StatLabel>
      <StatNumber>{ averageRenderTime.toFixed(5) }ms</StatNumber>
      <GetRating renderingTime={ averageRenderTime } />
    </Stat>
    <Stat>
      <StatLabel>Rerendered</StatLabel>
      <StatNumber>{ rerenderTimes } times</StatNumber>
    </Stat>
  </HStack>
)
