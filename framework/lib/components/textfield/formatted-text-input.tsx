import React from 'react'
import { Input } from '@chakra-ui/react'
import { FormattedTextInputProps } from './types'

export const FormattedTextInput = ({
  onChange,
  setValue,
  formatter,
  field,
  ...rest
}: FormattedTextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget: { value } } = e
    const unFormattedValue = formatter.unFormat(value)

    if (setValue) {
      setValue(unFormattedValue)
      return
    }

    onChange?.(unFormattedValue)
  }

  const value = (field?.value ?? rest.value) ?? ''

  const formattedValue = value === ''
    ? value
    : formatter.format(value)

  return (
    <Input
      onChange={ handleChange }
      value={ formattedValue }
      { ...rest }
    />
  )
}
