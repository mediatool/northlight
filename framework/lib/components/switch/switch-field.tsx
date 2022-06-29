import React from 'react'
import { Field, useField } from 'formik'
import { FormControl as ChakraFormControl, FormErrorMessage, FormLabel, HStack } from '@chakra-ui/react'
import { Switch } from '~lib/components'
import { SwitchFieldProps } from '~/lib/types'

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
    <ChakraFormControl
      isInvalid={ !!error && touched }
      isRequired={ isRequired }
    >
      <HStack spacing="auto">
        <FormLabel htmlFor={ name } mb={ 0 }>{ label }</FormLabel>
        <Field
          as={ Switch }
          name={ name }
          value={ value }
          { ...rest }
        />
      </HStack>
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
