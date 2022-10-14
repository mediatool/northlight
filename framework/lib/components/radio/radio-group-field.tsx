import React from 'react'
import { RadioFieldGroupProps } from './types'
import { Field } from '../form'
import { RadioGroup } from './radio-group'

export const RadioGroupField = ({
  name,
  label,
  children,
  direction,
  isRequired,
  validate,
  ...rest
}: RadioFieldGroupProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { (field) => (
      <RadioGroup
        name={ name }
        onChange={ field.onChange }
        direction={ direction }
        value={ field.value }
        data-testid="radio-group-field-test-id"
        { ...rest }
      >
        { children }
      </RadioGroup>
    ) }
  </Field>
)
