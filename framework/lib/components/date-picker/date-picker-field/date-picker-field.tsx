import React from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { identity } from 'ramda'
import { DatePickerFieldProps } from '../types'
import { Field } from '../../form'
import { DatePicker } from '../date-picker/date-picker'
import { useFormContext } from '../../../hooks'
import { InputGroupWrapper } from '../../../internal-components/input-group-wrapper'

export const DatePickerField = ({
  name,
  minValue,
  maxValue,
  isRequired,
  direction = 'column',
  label,
  validate,
  firstDayOfWeek = 'monday',
  onChange: onChangeCallback = identity,
  inputLeftElement,
  inputRightElement,
  ...rest
}: DatePickerFieldProps) => {
  const { setValue, setError, trigger } = useFormContext()

  const handleChange = (date: DateValue) => {
    setValue(name, date?.toString())
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
        <InputGroupWrapper
          inputLeftElement={ inputLeftElement }
          inputRightElement={ inputRightElement }
        >
          <DatePicker
            firstDayOfWeek={ firstDayOfWeek }
            aria-label={ label }
            isInvalid={ !!errors[name] }
            onChange={ handleChange }
            resetDate={ () => onChange(null) }
            value={ value ? parseDate(value) as any : null }
            minValue={ minValue ? parseDate(minValue) as DateValue : undefined }
            maxValue={ maxValue ? parseDate(maxValue) as DateValue : undefined }
            validationState={ errors.name ? 'invalid' : 'valid' }
            { ...rest as any }
          />
        </InputGroupWrapper>
      ) }
    </Field>

  )
}
