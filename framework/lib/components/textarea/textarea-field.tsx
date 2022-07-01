import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, Stack } from '@chakra-ui/react'
import { FormLabel, Textarea } from '~lib/components'
import { TextareaFieldProps } from '~/lib/types'

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
          { ...rest }
        />
      </Stack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
