import React, { forwardRef } from 'react'
import { DateValue, parseDate } from '@internationalized/date'
import { identity } from 'ramda'
import { DatePickerFieldProps } from '../types'
import { Field } from '../../form'
import { DatePicker } from '../date-picker/date-picker'
import { useFormContext } from '../../../hooks'
import { InputGroupWrapper } from '../../../internal-components/input-group-wrapper'

/**
 * The <DatePicker /> component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see DatePicker
 * @see {@link https://northlight.dev/reference/date-picker-field}
 *
 * @example (Example)
 * ##Fill in your information:
 * (?
 * <Form initialValues={{date: null}}>
 * <DatePickerField name="date" />
 * </Form>
 *
 * ?)
 * <br />
 * ###The simplest way
 * Using the date picker in a form is probably the easiest
 * way to use it, it will handle the state for you and you
 * can retrieve the date at the end as a string on format
 * yyyy-mm-dd on the onSubmit callback on <Form>
 *
 */
export const DatePickerField = forwardRef<HTMLDivElement, DatePickerFieldProps>(({
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
}, ref) => {
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
      ref={ ref }
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
})
