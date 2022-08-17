import React from 'react'
import { FormControl, FormErrorMessage } from '@chakra-ui/react'
import { DateValue, parseDate } from '@internationalized/date'
import { Field, useField } from 'formik'
import { DatePicker } from './date-picker'
import { FormLabel } from '../form-control'
import { DatePickerFieldProps } from '../../types'
import { Stack } from '../stack'

export const DatePickerField = (props: DatePickerFieldProps) => {
  const {
    name,
    validate,
    minValue,
    maxValue,
    isRequired,
    direction = 'column',
    ...rest
  } = props
  const [ { value }, { error }, { setValue } ] = useField({ name, validate })
  const isColumn = direction === 'column'

  const setDate = (date: DateValue) => {
    const formatted = date?.toString() || null
    setValue(formatted)
  }

  const resetDate = () => setValue(null)

  const handleChange = (date: DateValue | null) => (
    date
      ? setDate(date)
      : resetDate()
  )

  return (
    <FormControl
      isInvalid={ !!error }
      isRequired={ isRequired }
    >
      <Stack spacing="auto" direction={ direction } alignItems={ isColumn ? 'stretch' : 'center' }>
        <FormLabel mb={ isColumn ? 1 : 0 }>{ props.label }</FormLabel>
        <Field
          name={ name }
          component={ DatePicker }
          value={ value ? parseDate(value) : null }
          onChange={ handleChange }
          minValue={ minValue ? parseDate(minValue) : null }
          maxValue={ maxValue ? parseDate(maxValue) : null }
          validationState={ error ? 'invalid' : 'valid' }
          isColumn={ isColumn }
          resetDate={ resetDate }
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
