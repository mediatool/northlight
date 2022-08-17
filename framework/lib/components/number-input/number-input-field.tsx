import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react'
import { NumberInput } from './number-input'
import { NumberInputFieldProps } from '../../types'
import { HStack } from '../stack'

export const NumberInputField = ({
  name,
  label,
  validate,
  isRequired,
  ...rest
}: NumberInputFieldProps) => {
  const [ field, { error, touched }, { setValue } ] = useField({ name, validate })
  const { value } = field

  return (
    <ChakraFormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <HStack spacing="auto">
        <FormLabel htmlFor={ name } mb={ 0 }>{ label }</FormLabel>
        <Field
          as={ NumberInput }
          name={ name }
          value={ value }
          onChange={ setValue }
          data-testid="number-input-field-test-id"
          { ...rest }
        />
      </HStack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
