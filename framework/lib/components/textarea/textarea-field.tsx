import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage } from '@chakra-ui/react'
import { Textarea } from './textarea'
import { FormLabel } from '../form-control'

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
    <ChakraFormControl
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
    </ChakraFormControl>
  )
}
