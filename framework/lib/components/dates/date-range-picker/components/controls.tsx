import React from 'react'
import { ChevronDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { months } from '../../util'

import { Flex } from '../../../flex'
import { Button } from '../../../button'
import { IconButton } from '../../../icon-button'

interface Props {
  month: number
  year: number
  toggleYears(): void
  prev: Record<string, any>
  next: Record<string, any>
}

export const Controls = ({
  month,
  year,
  toggleYears,
  prev,
  next,
}: Props) => (
  <Flex justifyContent="space-between">
    <Button
      variant="ghost"
      px={ 2 }
      py={ 1 }
      rightIcon={ <ChevronDownIcon /> }
      onClick={ toggleYears }
    >
      { months[month] } { year }
    </Button>
    <Flex alignItems="center">
      <IconButton
        aria-label="Previous month"
        icon={ <ChevronLeftIcon /> }
        variant="ghost"
        size="sm"
        { ...prev }
        disabled={ year === 2012 && month === 0 }
      />
      <IconButton
        aria-label="Next month"
        icon={ <ChevronRightIcon /> }
        variant="ghost"
        size="sm"
        { ...next }
      />
    </Flex>
  </Flex>
)
