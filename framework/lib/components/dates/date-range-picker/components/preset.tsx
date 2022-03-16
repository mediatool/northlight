import React from 'react'
import { DatePreset, DateTuple } from '../types'
import { Text } from '../../../text'

interface Props {
  preset: DatePreset
  onClick: (dateRange: DateTuple) => void
  selected: boolean
}

export const Preset = ({ onClick, preset, selected }: Props) => (
  <Text
    role="button"
    onClick={ () => onClick(preset.range) }
    color={ selected ? 'blue.500' : 'mediatoolBlue.500' }
    fontWeight={ selected ? 'semibold' : 'normal' }
    fontSize="16px"
    _hover={ { fontWeight: 'semibold' } }
  >
    { preset.title }
  </Text>
)
