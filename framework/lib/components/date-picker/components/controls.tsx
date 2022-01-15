import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'
import { ToggleYearsButton } from './toggle-years-button'
import { useDatePickerState } from '../util'
import { Flex } from '../../flex'
import { IconButton } from '../../icon-button'
import { HStack } from '../../stack'

interface Props {
  month: number
  year: number
  toggleYears(): void
}

export const Controls = ({ month, year, toggleYears }: Props) => {
  const { dayzed } = useDatePickerState()
  const {
    getBackProps,
    getForwardProps,
    calendars,
  } = dayzed

  return (
    <Flex justifyContent="space-between" alignItems="center">
      <ToggleYearsButton
        month={ month }
        year={ year }
        toggleYears={ toggleYears }
      />
      <HStack spacing={ 2 }>
        <IconButton
          aria-label="Previous month"
          icon={ <ChevronLeftIcon /> }
          variant="ghost"
          size="sm"
          { ...getBackProps({ calendars }) }
        />
        <IconButton
          aria-label="Next month"
          icon={ <ChevronRightIcon /> }
          variant="ghost"
          size="sm"
          { ...getForwardProps({ calendars }) }
        />
      </HStack>
    </Flex>
  )
}
