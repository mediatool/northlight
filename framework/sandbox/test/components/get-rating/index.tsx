import React from 'react'
import { Badge } from '../../../../lib/components'

type Props = {
  renderingTime: number
}

export const GetRating = ({ renderingTime }: Props) => {
  if (renderingTime < 10) {
    return <Badge colorScheme="green">Good</Badge>
  }
  if (renderingTime < 20) {
    return <Badge colorScheme="yellow">slow</Badge>
  }
  return <Badge colorScheme="red">Bad</Badge>
}
