import React from 'react'
import { useField } from 'formik'
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { TextFieldProps } from './types'
import { PlainTextInput } from './plain-text-input'

export function TextField ({
  name,
  validate,
  label,
  as: As = PlainTextInput,
  ...rest
}: TextFieldProps) {
  const [ field, { error, touched }, { setValue } ] = useField({ name, validate })

  return (
    <ChakraFormControl isInvalid={ !!error && touched }>
      { label && (
        <FormLabel htmlFor={ name }>{ label }</FormLabel>
      ) }
      <As
        field={ field }
        setValue={ setValue }
        { ...rest }
      />
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
