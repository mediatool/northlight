import React from 'react'
import { Field, useField } from 'formik'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { Checkbox } from './checkbox'
import { CheckboxFieldProps } from '../../types'
import { HStack } from '../stack'

export const CheckboxField = ({
  name,
  label,
  validate,
  isRequired,
  variant,
  ...rest
}: CheckboxFieldProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })
  const { value } = field

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <HStack spacing="auto">
        <FormLabel htmlFor={ name } mb={ 0 }>{ label }</FormLabel>
        <Field
          as={ Checkbox }
          name={ name }
          value={ value }
          variant={ variant }
          data-testid="checkbox-field-test-id"
          { ...rest }
        />
      </HStack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
