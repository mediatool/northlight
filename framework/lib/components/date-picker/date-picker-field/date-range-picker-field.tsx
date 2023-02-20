import React from 'react'
import { identity } from 'ramda'
import { DateRangePickerFieldProps, FormBody } from '../types'
import { Field } from '../../form'
import { DateRangePicker } from '../date-picker/date-range-picker'
import { useFormContext } from '../../../hooks'

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

  const handleChange = (dateRange: { startDate: string, endDate: string }) => {
    setValue(name, dateRange)
    if (
      (minValue && dateRange?.startDate < minValue) ||
      (maxValue && dateRange?.endDate > maxValue)
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
    onChangeCallback(dateRange)
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
          value={ value }
          minValue={ minValue }
          maxValue={ maxValue }
          validationState={ errors.name ? 'invalid' : 'valid' }
          { ...(rest as any) }
        />
      ) }
    </Field>
  )
}
