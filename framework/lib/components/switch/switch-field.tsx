import React from 'react'
import { Field, useField } from 'formik'
import { Switch } from './switch'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { SwitchFieldProps } from '../../types'
import { HStack } from '../stack'

export const SwitchField = ({
  name,
  label,
  validate,
  isRequired,
  ...rest
}: SwitchFieldProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })
  const { value } = field

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <HStack spacing="auto">
        <FormLabel htmlFor={ name } mb={ 0 }>
          { label }
        </FormLabel>
        <Field
          as={ Switch }
          name={ name }
          value={ value }
          data-testid="switch-field-test-id"
          { ...rest }
        />
      </HStack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
