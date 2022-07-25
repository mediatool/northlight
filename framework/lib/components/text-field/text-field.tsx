import React, { ComponentProps, ComponentType } from 'react'
import { Field, useField } from 'formik'
import {
  FormControl as ChakraFormControl,
  FormErrorMessage,
  FormLabel,
} from '@chakra-ui/react'
import { TextFieldProps } from './types'
import { PlainTextInput } from './plain-text-input'

export function TextField<TComponent extends ComponentType<any>> ({
  name,
  validate,
  label,
  as: As = PlainTextInput,
  ...rest
}: TextFieldProps<TComponent> & ComponentProps<TComponent>) {
  const [ field, { error, touched }, { setValue } ] = useField({ name, validate })
  const { value } = field

  return (
    <ChakraFormControl isInvalid={ !!error && touched }>
      { label && (
        <FormLabel htmlFor={ name } mb={ 1 }>{ label }</FormLabel>
      ) }
      <Field
        component={ As }
        onChange={ setValue }
        value={ value }
        name={ name }
        { ...rest }
      />
      <FormErrorMessage>{ error }</FormErrorMessage>
    </ChakraFormControl>
  )
}
