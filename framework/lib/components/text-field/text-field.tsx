import React from 'react'
import { Field, useField } from 'formik'
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { TextFieldProps } from './types'
import { PlainTextInput } from './plain-text-input'
import { FormattedNumberInput } from './formatted-number-input'

export function TextField ({
  name,
  validate,
  label,
  as: As = PlainTextInput,
  ...rest
}: TextFieldProps) {
  const [ field, { error, touched }, { setValue } ] = useField({ name, validate })
  const { value } = field

  return (
    <ChakraFormControl isInvalid={ !!error && touched }>
      { label && (
        <FormLabel htmlFor={ name } mb={ 1 }>{ label }</FormLabel>
      ) }
      <Field
        as={ As }
        onChange={ As === FormattedNumberInput ? setValue : field.onChange }
        value={ value }
        name={ name }
        data-testid="text-field-test-id"
        { ...rest }
      />
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
