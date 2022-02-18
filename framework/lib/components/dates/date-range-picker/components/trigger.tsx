import React from 'react'
import { CalendarIcon } from '@chakra-ui/icons'
import { isDateTuple } from '../util'
import { DateTuple } from '../types'
import { Flex } from '../../../flex'
import { Box } from '../../../box'

interface Props {
  onClick: () => void
  dateRange: Partial<DateTuple>
  id: string
}

export const Trigger = ({ onClick, dateRange, id }: Props) => (
  <Box
    w="max-content"
    shadow="sm"
    borderRadius={ 4 }
    padding={ 1 }
  >
    <Flex
      id={ id }
      borderRadius={ 4 }
      onClick={ onClick }
      bg="gray.100"
      alignItems="center"
      role="button"
      py={ 1 }
      px={ 2 }
      color="primary"
      fontWeight="semibold"
      _hover={ { cursor: 'pointer' } }
    >
      <CalendarIcon pointerEvents="none" color="primary" mr={ 2 } />
      { !isDateTuple(dateRange) ? (
        'Select date range'
      ) : (
        `${dateRange[0].toLocaleDateString()} - ${dateRange[1].toLocaleDateString()}`
      ) }
    </Flex>
  </Box>
)
