import React from 'react'
import { Field, useField } from 'formik'
import { Textarea } from './textarea'
import { FormControl, FormErrorMessage, FormLabel } from '../form-control'
import { TextareaFieldProps } from '../../types'
import { Stack } from '../stack'

export const TextareaField = ({
  name,
  label,
  validate,
  isRequired,
  ...rest
}: TextareaFieldProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })
  const { value } = field

  return (
    <FormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <Stack spacing="auto">
        <FormLabel htmlFor={ name } mb={ 1 }>
          { label }
        </FormLabel>
        <Field
          as={ Textarea }
          name={ name }
          value={ value }
          data-testid="textarea-field-test-id"
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </FormControl>
  )
}
