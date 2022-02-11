import React from 'react'
import { Preset } from './preset'
import { DatePreset } from '../types'
import {
  getMonthlyPresets,
  getQuarterPresets,
  getWeeklyPresets,
  getYearlyPresets,
} from '../util'
import { FirstDayOfWeek } from '../../util'
import { HStack, Stack } from '../../../stack'
import { Divider } from '../../../divider'
import { Box } from '../../../box'

interface Props {
  onPresetSelected: (preset: DatePreset) => void
  firstDayOfWeek?: FirstDayOfWeek
  selectedPreset?: string
  fiscalDate?: Date
}

export const Presets = ({
  onPresetSelected,
  selectedPreset,
  fiscalDate,
  firstDayOfWeek = 0,
}: Props) => {
  const onPresetClick = (preset: DatePreset) => () => {
    onPresetSelected(preset)
  }

  const weeklyPresets = getWeeklyPresets({ date: new Date(), firstDayOfWeek })
  const monthlyPresets = getMonthlyPresets({ date: new Date() })
  const yearlyPresets = getYearlyPresets({ fiscalDate })

  const presets = [
    weeklyPresets,
    monthlyPresets,
    yearlyPresets,
  ]

  return (
    <Box
      pt={ 1 }
      pr={ 6 }
      borderRight="1px solid"
      borderColor="gray.50"
    >
      <Stack spacing={ 4 } alignItems="stretch">
        { presets.map((outerPreset) => outerPreset.map((preset) => (
          <Preset
            key={ preset.title }
            preset={ preset }
            onClick={ onPresetClick(preset) }
            selected={ preset.title === selectedPreset }
          />
        ))) }
      </Stack>
      <Divider my={ 4 } w="30%" />
      <HStack spacing={ 3 }>
        { getQuarterPresets(fiscalDate).map((preset) => (
          <Preset
            key={ preset.title }
            preset={ preset }
            onClick={ onPresetClick(preset) }
            selected={ preset.title === selectedPreset }
          />
        )) }
      </HStack>
    </Box>
  )
}
