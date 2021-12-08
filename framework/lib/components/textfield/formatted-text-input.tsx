import React from 'react'
import { FormattedTextInputProps } from './types'
import { PlainTextInput } from './plain-text-input'

export const FormattedTextInput = ({
  onChange,
  formatter,
  ...rest
}: FormattedTextInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { currentTarget } = e
    const { value } = currentTarget

    onChange?.(formatter.unFormat(value))
  }

  const value = formatter.format(String(rest.value) ?? '')

  return (
    <PlainTextInput
      { ...rest }
      onChange={ handleChange }
      value={ value }
    />
  )
}
