import React from 'react'
import { useField } from 'formik'
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { AbstractTextInput } from './abstract-text-input'
import { TextFieldProps } from './types'

export const TextField = ({
  name,
  validate,
  label,
  ...rest
}: TextFieldProps) => {
  const [ field, { error, touched } ] = useField({ name, validate })

  return (
    <ChakraFormControl isInvalid={ !!error && touched }>
      { label && (
        <FormLabel htmlFor={ name }>{ label }</FormLabel>
      ) }
      <AbstractTextInput { ...rest } { ...field } />
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
