import React, { useState } from 'react'
import { identity, isNil } from 'ramda'
import { NumberInputFieldProps } from './types'
import { Field } from '../form'
import { NumberInput } from './number-input'
import { advancedParseFloat } from './advanced-parse-float'
import { InputGroupWrapper } from '../../internal-components'

export const NumberInputField = ({
  name,
  label,
  direction,
  isRequired,
  validate,
  onChange: onChangeCallback = identity,
  onlyAcceptPercentage = false,
  inputLeftElement,
  inputRightElement,
  ...rest
}: NumberInputFieldProps) => {
  const percentageFactor = onlyAcceptPercentage ? 0.01 : 1

  return (
    <Field
      name={ name }
      label={ label }
      direction={ direction }
      isRequired={ isRequired }
      validate={ validate }
    >
      { ({ onChange, value }) => {
        const initialValue = isNil(value) || Number.isNaN(parseFloat(value))
          ? ''
          : advancedParseFloat(value / percentageFactor)
        const [ displayValue, setDisplayValue ] = useState(initialValue)

        return (
          <InputGroupWrapper
            inputLeftElement={ inputLeftElement }
            inputRightElement={ inputRightElement }
          >
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
          </InputGroupWrapper>
        )
      } }
    </Field>
  )
}
