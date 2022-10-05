import React from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { DatePickerFieldProps } from '../../types'
import { Field } from '../form'
import { DatePicker } from './date-picker'

export const DatePickerField = ({
  name,
  minValue,
  maxValue,
  isRequired,
  direction = 'column',
  label,
  validate,
  firstDayOfWeek = 'monday',
}: DatePickerFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { ({ value, onChange }, { formState: { errors } }) => (
      <DatePicker
        firstDayOfWeek={ firstDayOfWeek }
        aria-label={ label }
        isInvalid={ Boolean(errors[name]) }
        onChange={ (date: DateValue) => onChange(date?.toString()) }
        resetDate={ onChange }
        value={ value ? parseDate(value) as any : null }
        minValue={ minValue ? parseDate(minValue) as DateValue : undefined }
        maxValue={ maxValue ? parseDate(maxValue) as DateValue : undefined }
        validationState={ errors.name ? 'invalid' : 'valid' }
      />
    ) }
  </Field>

)
