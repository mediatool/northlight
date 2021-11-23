import React from 'react'
import { FieldValidator, useField } from 'formik'
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
  InputProps,
} from '@chakra-ui/react'
import { SimpleTextField } from './simple-textfield'

type Props = InputProps & {
  validate?: FieldValidator
  name: string
  label?: string
}

export const TextField = ({
  name,
  validate,
  label,
  ...rest
}: Props) => {
  const [ field, { error, touched } ] = useField({ name, validate })

  return (
    <ChakraFormControl isInvalid={ !!error && touched }>
      { label && (
        <FormLabel htmlFor={ name }>{ label }</FormLabel>
      ) }
      <SimpleTextField { ...rest } { ...field } />
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
