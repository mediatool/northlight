import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, FormLabel, HStack } from '@chakra-ui/react'
import { Checkbox } from './checkbox'
import { CheckboxFieldProps } from '../../types'

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
    <ChakraFormControl
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
    </ChakraFormControl>
  )
}
