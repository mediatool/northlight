import React from 'react'
import { NumberInputFieldProps } from '../../types'
import { Field } from '../form'
import { NumberInput } from './number-input'

export const NumberInputField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  ...rest
}: NumberInputFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { (field) => (
      <NumberInput
        name={ name }
        data-testid="number-input-field-test-id"
        onChange={ field.onChange }
        value={ field.value }
        { ...rest }
      />
    ) }
  </Field>
)
