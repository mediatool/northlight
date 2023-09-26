import React, { useState } from 'react'
import { identity, isNil } from 'ramda'
import { NumberInputFieldProps } from './types.ts'
import { Field } from '../form'
import { NumberInput } from './number-input.tsx'
import { advancedParseFloat } from './advanced-parse-float.ts'
import { InputGroupWrapper } from '../../internal-components/input-group-wrapper/input-group-wrapper'

/**
 * The number input component wrapped in a <Field />
 * meant to be used only inside <Form />
 * @see NumberInput
 * @see {@link https://northlight.dev/reference/number-input-field}
 *
 */
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
  const formatNumber = (value: number, factor: number) => (
    onlyAcceptPercentage
      ? advancedParseFloat(value * factor)
      : value
  )

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
          : formatNumber(value, 100)

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
                const parsed = formatNumber(parseFloat(v), 0.01)

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
