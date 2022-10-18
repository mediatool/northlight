import React from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { DatePickerFieldProps } from './types'
import { Field } from '../form'
import { DatePicker } from './date-picker'
import { useFormContext } from '../../hooks'

export const DatePickerField = ({
  name,
  minValue,
  maxValue,
  isRequired,
  direction = 'column',
  label,
  validate,
  firstDayOfWeek = 'monday',
  ...rest
}: DatePickerFieldProps) => {
  const { setValue, setError, trigger } = useFormContext()

  const handleChange = (date: DateValue) => {
    if ((minValue && date < parseDate(minValue)) || (maxValue && date > parseDate(maxValue))) {
      setError(name, {
        type: 'custom',
        message: minValue && maxValue
          ? `Date must be between ${minValue}-${maxValue}`
          : minValue
            ? `Select date earliest at ${minValue}`
            : `Select date latest at ${maxValue}`
        ,
      })
    } else {
      trigger()
    }
    setValue(name, date?.toString())
  }

  return (
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
          onChange={ handleChange }
          resetDate={ () => onChange(null) }
          value={ value ? parseDate(value) as any : null }
          minValue={ minValue ? parseDate(minValue) as DateValue : undefined }
          maxValue={ maxValue ? parseDate(maxValue) as DateValue : undefined }
          validationState={ errors.name ? 'invalid' : 'valid' }
          { ...rest as any }
        />
      ) }
    </Field>

  )
}
