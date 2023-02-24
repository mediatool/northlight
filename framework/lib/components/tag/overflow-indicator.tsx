import React from 'react'
import { OverflowIndicatorProps } from './types'
import { Tag } from './tag'

export const OverflowIndicator = ({
  nbrRemainingTags,
}: OverflowIndicatorProps) => (
  <Tag variant="subtle" minW="max-content">
    +{ nbrRemainingTags }
  </Tag>
)
