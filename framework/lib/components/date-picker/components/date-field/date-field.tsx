import React, { useRef } from 'react'
import { useDateFieldState } from '@react-stately/datepicker'
import { useDateField } from '@react-aria/datepicker'
import { createCalendar } from '@internationalized/date'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { find, split } from 'ramda'
import { Box } from '../../../box'
import { DateSegment } from './date-segment'
import { DateFieldProps, DateSegmentType } from './types'
import { delimeterIncluded, formatQuery } from './utils'

export const DateField = (props: DateFieldProps) => {
  const ref = useRef<HTMLInputElement>(null)
  const { size, dateFormat = 'dd/mm/yyyy', ...ariaProps } = props
  const state = useDateFieldState({
    ...ariaProps,
    /* Hard coding the United Kingdom locale,
     this enforces using english characters e.g.
      yyyy and not other such as åååå or chinese, which prevents hard to predict bugs */
    locale: 'en-GB',
    createCalendar,
  })

  const { dateField } = useMultiStyleConfig('DatePicker', { size })
  const { fieldProps } = useDateField(ariaProps, state, ref)

  const { segments } = state
  const getMatchingSegment = (query: string, index: number) =>
    find(
      (segment: DateSegmentType) => segment.placeholder === formatQuery(query)
    )(segments) || { ...segments[index], text: query }

  const sortedSegments = split(delimeterIncluded, dateFormat).map(
    (query: string, index: number) => getMatchingSegment(query, index)
  )

  return (
    <Box
      { ...fieldProps }
      ref={ ref }
      display="flex"
      __css={ dateField }
      data-testid="date-field-test-id"
    >
      { sortedSegments.map((segment, i) => {
        const id = `${segment.type}-${i}`
        return <DateSegment segment={ segment } state={ state } key={ id } size={ size } />
      }) }
    </Box>
  )
}
