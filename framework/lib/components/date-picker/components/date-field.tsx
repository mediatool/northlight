import React, { useRef } from 'react'
import { useLocale } from '@react-aria/i18n'
import { useDateFieldState } from '@react-stately/datepicker'
import { useDateField } from '@react-aria/datepicker'
import { createCalendar } from '@internationalized/date'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Box } from '../../box'
import { DateSegment } from './date-segment'
import { StyledField } from './styled-field'
import { DateFieldProps } from '../types'

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

  return (
    <StyledField
      isInvalid={ props.isInvalid }
      isDisabled={ props.isDisabled }
    >
      <Box
        { ...fieldProps }
        ref={ ref }
        display="flex"
        __css={ dateField }
      >
        { state.segments.map((segment, i) => {
          const id = `${segment.type}-${i}`
          return (
            <DateSegment
              segment={ segment }
              state={ state }
              key={ id }
            />
          )
        }) }
      </Box>
    </StyledField>
  )
}
