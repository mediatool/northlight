import React from 'react'
import { SimpleGrid } from '../../simple-grid'
import { createYearsRange } from '../util'
import { Button } from '../../button'
import { ToggleYearsButton } from './toggle-years-button'

interface Props {
  month: number
  year: number
  onYearSelect: (year: number) => void
  toggleYears(): void
}

const yearRange = createYearsRange()

export const YearsGrid = ({
  onYearSelect,
  toggleYears,
  month,
  year: currentSelectedYear,
}: Props) => (
  <>
    <ToggleYearsButton
      month={ month }
      year={ currentSelectedYear }
      toggleYears={ toggleYears }
    />
    <SimpleGrid columns={ 4 }>
      { yearRange.map((year) => (
        <Button
          variant="ghost"
          key={ year }
          onClick={ () => onYearSelect(year) }
        >
          { year }
        </Button>
      )) }
    </SimpleGrid>
  </>
)
