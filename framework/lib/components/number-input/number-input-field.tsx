import React from 'react'
import { identity } from 'ramda'
import { NumberInputFieldProps } from './types'
import { Field } from '../form'
import { NumberInput } from './number-input'

export const NumberInputField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  ...rest
}: NumberInputFieldProps) => (
  <Field
    name={ name }
    label={ label }
    direction={ direction }
    isRequired={ isRequired }
    validate={ validate }
  >
    { ({ onChange, value }) => (
      <NumberInput
        name={ name }
        data-testid="number-input-field-test-id"
        onChange={ (e: React.ChangeEvent<HTMLInputElement> | string) => {
          onChange(e)
          onChangeCallback(e)
        } }
        value={ value }
        { ...rest }
      />
    ) }
  </Field>
)
