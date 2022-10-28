import React, { useRef } from 'react'
import { useLocale } from '@react-aria/i18n'
import {
  DateSegment as DateSegmentType,
  useDateFieldState,
} from '@react-stately/datepicker'
import { useDateField } from '@react-aria/datepicker'
import { createCalendar } from '@internationalized/date'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { find, split } from 'ramda'
import { Box } from '../../box'
import { DateSegment } from './date-segment'
import { StyledField } from './styled-field'
import { DateFieldProps } from '../types'
import { delimeterIncluded, formatQuery } from './utils'

export const DateField = (props: DateFieldProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { locale } = useLocale()
  const state = useDateFieldState({
    ...props,
    locale,
    createCalendar,
  })

  const { dateField } = useMultiStyleConfig('DatePicker')
  const { fieldProps } = useDateField(props, state, ref)

  const { segments } = state
  const { dateFormat = 'dd/mm/yyyy' } = props
  const getMatchingSegment = (query: string, index: number) =>
    find((segment: DateSegmentType) => segment.placeholder === formatQuery(query))(segments)
    || { ...segments[index], text: query }

  const sortedSegments = split(delimeterIncluded, dateFormat).map(
    (query: string, index: number) => getMatchingSegment(query, index)
  )

  return (
    <StyledField isInvalid={ props.isInvalid } isDisabled={ props.isDisabled }>
      <Box
        { ...fieldProps }
        ref={ ref }
        display="flex"
        __css={ dateField }
        data-testid="date-field-test-id"
      >
        { sortedSegments.map((segment, i) => {
          const id = `${segment.type}-${i}`
          return <DateSegment segment={ segment } state={ state } key={ id } />
        }) }
      </Box>
    </StyledField>
  )
}
