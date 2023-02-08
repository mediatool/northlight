import React from 'react'
import { CheckboxFieldProps } from './types'
import { Field } from '../form'
import { Checkbox } from './checkbox'

export const CheckboxField = ({
  name,
  label,
  variant,
  isRequired,
  validate,
  ...rest
}: CheckboxFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction="row"
    isRequired={ isRequired }
    validate={ validate }
  >
    { (field) => (
      <Checkbox
        name={ name }
        data-testid="checkbox-field-test-id"
        onChange={ field.onChange }
        value={ field.value }
        variant={ variant }
        { ...rest }
      />
    ) }
  </Field>
)