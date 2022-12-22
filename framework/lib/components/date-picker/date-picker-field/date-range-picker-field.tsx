import React from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { identity } from 'ramda'
import { DateRange } from '@react-types/datepicker'
import { DateRangePickerFieldProps, FormBody } from '../types'
import { Field } from '../../form'
import { DateRangePicker } from '../date-picker/date-range-picker'
import { useFormContext } from '../../../hooks'
import { isValidDateRange } from './utils'

export const DateRangePickerField = ({
  name,
  minValue,
  maxValue,
  isRequired,
  direction = 'column',
  label,
  validate,
  firstDayOfWeek = 'monday',
  onChange: onChangeCallback = identity,
  ...rest
}: DateRangePickerFieldProps) => {
  const { setValue, setError, trigger } = useFormContext<FormBody>()

  const handleChange = (date: DateRange) => {
    setValue(name, {
      startDate: date?.start.toString(),
      endDate: date?.end.toString(),
    })
    if (
      (minValue && date?.start < parseDate(minValue)) ||
      (maxValue && date?.end > parseDate(maxValue))
    ) {
      setError(name, {
        type: 'custom',
        message:
          minValue && maxValue
            ? `Date must be between ${minValue}-${maxValue}`
            : minValue
              ? `Select date earliest at ${minValue}`
              : `Select date latest at ${maxValue}`,
      })
    } else {
      trigger(name)
    }
    onChangeCallback(date)
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
        <DateRangePicker
          firstDayOfWeek={ firstDayOfWeek }
          aria-label={ label }
          isInvalid={ !!errors[name] }
          onChange={ handleChange }
          resetDate={ () => onChange(null) }
          value={
            isValidDateRange(value)
              ? { start: parseDate(value.startDate), end: parseDate(value.endDate) }
              : null
          }
          minValue={ minValue ? (parseDate(minValue) as DateValue) : undefined }
          maxValue={ maxValue ? (parseDate(maxValue) as DateValue) : undefined }
          validationState={ errors.name ? 'invalid' : 'valid' }
          { ...(rest as any) }
        />
      ) }
    </Field>
  )
}
