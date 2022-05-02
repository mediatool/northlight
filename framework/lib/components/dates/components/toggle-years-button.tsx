import React from 'react'
import { ChevronDownIcon } from '@chakra-ui/icons'
import { Button } from '../../button'
import { months } from '../util'

interface Props {
  toggleYears(): void
  month: number
  year: number
}

export const ToggleYearsButton = ({
  month,
  year,
  toggleYears,
}: Props) => (
  <Button
    variant="ghost"
    px={ 2 }
    py={ 1 }
    rightIcon={ <ChevronDownIcon /> }
    onClick={ toggleYears }
    fontSize="sm"
  >
    { months[month] } { year }
  </Button>
)
