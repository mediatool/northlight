import React from 'react'
import { SwitchFieldProps } from './types'
import { Field } from '../form'
import { Switch } from './switch'

export const SwitchField = ({
  name,
  label,
  isRequired,
  validate,
  ...rest
}: SwitchFieldProps) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    direction="row"
    validate={ validate }
  >
    { (field) => (
      <Switch
        name={ name }
        onChange={ field.onChange }
        value={ field.value }
        data-testid="switch-field-test-id"
        { ...rest }
      />
    ) }
  </Field>
)
