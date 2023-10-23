import React, { forwardRef } from 'react'
import { identity, isNil } from 'ramda'
import { TextFieldProps } from './types'
import { Input } from '../input'
import { Field } from '../form'
import { InputGroupWrapper } from '../../internal-components/input-group-wrapper'

/**
 * The Input component wrapped in <Field />
 * Also supported formmated and musked input via as prop
 * @see Input
 * @see MaskedTextInput
 * @see FormattedNumberInput
 * @see {@link https://northlight.dev/reference/text-field}
 *
 *
 */
export const TextField = forwardRef<HTMLDivElement, TextFieldProps>(({
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
}, ref) => (
  <Field
    name={ name }
    label={ label }
    isRequired={ isRequired }
    validate={
      isNil(validate) && isRequired
        ? { validate: (value: string) => !!value.trim() }
        : validate
    }
    direction={ direction }
    ref={ ref }
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
))
