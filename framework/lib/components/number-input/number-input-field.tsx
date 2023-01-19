import React, { useState } from 'react'
import { identity } from 'ramda'
import { NumberInputFieldProps } from './types'
import { Field } from '../form'
import { NumberInput } from './number-input'
import { advancedParseFloat } from './advanced-parse-float'

export const NumberInputField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  onlyAcceptPercentage = false,
  ...rest
}: NumberInputFieldProps) => {
  const percentageFactor = onlyAcceptPercentage ? 0.01 : 1
  const [ displayValue, setDisplayValue ] = useState('')

  return (
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { ({ onChange }) => (
        <NumberInput
          name={ name }
          data-testid="number-input-field-test-id"
          onInputChange={ (v) => {
            setDisplayValue(v)
            const parsed = advancedParseFloat(parseFloat(v) * percentageFactor)
            onChange(parsed)
            onChangeCallback(parsed)
          } }
          value={ displayValue }
          onlyAcceptPercentage={ onlyAcceptPercentage }
          { ...rest }
        />
      ) }
    </Field>
  )
}
