import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, FormLabel, HStack } from '@chakra-ui/react'
import { NumberInput } from '~lib/components'
import { NumberInputFieldProps } from '~/lib/types'

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
          { ...rest }
        />
      </HStack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
