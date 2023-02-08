import React from 'react'
import { identity } from 'ramda'
import { TextFieldProps } from './types'
import { Input } from '../input'
import { Field } from '../form'
import { InputGroupWrapper } from '../../internal-components'

export const TextField = ({
  name,
  label,
  as: As = Input,
  isRequired,
  validate,
  direction = 'column',
  onChange: onChangeCallback = identity,
  inputLeftElement,
  inputRightElement,
  ...rest
}: TextFieldProps) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    validate={ validate }
    direction={ direction }
  >
    { ({ onChange, value }) => (
      <InputGroupWrapper
        inputLeftElement={ inputLeftElement }
        inputRightElement={ inputRightElement }
      >
        <As
          id={ name }
          name={ name }
          onChange={ (e: React.ChangeEvent<HTMLInputElement> | string) => {
            onChange(e)
            onChangeCallback(e)
          } }
          value={ value }
          data-testid="text-field-test-id"
          { ...rest }
        />
      </InputGroupWrapper>
    ) }
  </Field>
)
