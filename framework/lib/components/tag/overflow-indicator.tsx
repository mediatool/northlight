import React from 'react'
import { OverflowIndicatorProps } from './types.ts'
import { Tag } from './tag.tsx'

export const OverflowIndicator = ({
  nbrRemainingTags,
}: OverflowIndicatorProps) => (
  <Tag variant="subtle" minW="max-content">
    +{ nbrRemainingTags }
  </Tag>
)
