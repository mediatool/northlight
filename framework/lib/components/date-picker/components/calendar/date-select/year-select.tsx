import React from 'react'
import { Select, useMultiStyleConfig } from '@chakra-ui/react'
import { YearSelectProps } from './types.ts'

export const YearSelect = ({
  onChange,
  years,
}: YearSelectProps) => {
  const { dateSelect } = useMultiStyleConfig('Calendar')

  return (
    <Select
      id="year"
      aria-label="Year"
      onChange={ onChange }
      value={ 10 }
      size="sm"
      iconSize="0px"
      variant="unstyled"
      sx={ dateSelect }
      w="max-content"
    >
      { years.map((year, i) => (
        <option key={ year.formatted } value={ i }>
          { year.formatted }
        </option>
      )) }
    </Select>

  )
}
