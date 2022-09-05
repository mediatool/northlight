import React from 'react'
import { Field, useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { NumberInput } from './number-input'
import { NumberInputFieldProps } from '../../types'
import { Stack } from '../stack'

export const NumberInputField = ({
  name,
  label,
  validate,
  isRequired,
  direction = 'column',
  ...rest
}: NumberInputFieldProps) => {
  const [ field, { error, touched }, { setValue } ] = useField({ name, validate })
  const { value } = field

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <Stack
        spacing="auto"
        direction={ direction }
        alignItems={
          direction === 'column'
            ? 'stretch'
            : 'center'
          }
      >
        <FormLabel htmlFor={ name } mb={ direction === 'column' ? 1 : 0 }>
          { label }
        </FormLabel>
        <Field
          as={ NumberInput }
          name={ name }
          value={ value }
          onChange={ setValue }
          data-testid="number-input-field-test-id"
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
