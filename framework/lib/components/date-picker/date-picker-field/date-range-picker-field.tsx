import React, { forwardRef } from 'react'
import { identity } from 'ramda'
import { DateRangePickerFieldProps, FormBody } from '../types'
import { Field } from '../../form'
import { DateRangePicker } from '../date-picker/date-range-picker'
import { useFormContext } from '../../../hooks'

/**
 * The <DateRangePicker /> component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see DateRangePicker
 * @see {@link https://northlight.dev/reference/date-range-picker-field}
 *
 */
export const DateRangePickerField = forwardRef<HTMLDivElement, DateRangePickerFieldProps>(({
  name,
  minValue,
  maxValue,
  isRequired,
  direction = 'column',
  label,
  validate,
  firstDayOfWeek = 'monday',
  onChange: onChangeCallback = identity,
  isClearable = true,
  onSave,
  buttonLabel = 'Save',
  ...rest
}, ref) => {
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
      ref={ ref }
    >
      { ({ value, onChange }, { formState: { errors } }) => (
        <DateRangePicker
          firstDayOfWeek={ firstDayOfWeek }
          aria-label={ label }
          isInvalid={ !!errors[name] }
          onChange={ handleChange }
          onSave={ onSave }
          resetDate={ () => onChange(null) }
          value={ value }
          minValue={ minValue }
          maxValue={ maxValue }
          validationState={ errors.name ? 'invalid' : 'valid' }
          isClearable={ isClearable }
          buttonLabel={ buttonLabel }
          { ...(rest as any) }
        />
      ) }
    </Field>
  )
})
