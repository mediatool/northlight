import React, { forwardRef } from 'react'
import { identity } from 'ramda'
import { FormattedNumberInputFieldProps } from './types'
import { Field } from '../form'
import { FormattedNumberInput } from './formatted-number-input'

/**
 * The formatted number input component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see FormattedNumberInput
 * @see {@link https://northlight.dev/reference/formatted-number-input-field}
 * @example (Example)
 * (?
 * <Form initialValues={{money: ''}}>
 *  <FormattedNumberInputField
 *   name="money"
 *   label="How much money is currently on your account"
 *   labelPosition="left"
 *  />
 * </Form>
 * ?)
 *
 */
export const FormattedNumberInputField =
forwardRef<HTMLDivElement, FormattedNumberInputFieldProps>(({
  name,
  label,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  direction = 'row',
  ...rest
}, ref) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    direction={ direction }
    validate={ validate }
    ref={ ref }
  >
    { ({ onChange, value }) => (
      <FormattedNumberInput
        name={ name }
        onChange={ (values, sourceInfo) => {
          onChange(values.floatValue)
          onChangeCallback(values, sourceInfo)
        } }
        value={ value }
        { ...rest }
      />
    ) }
  </Field>
))
