import React from 'react'
import { Input } from '../input'
import { FormattedNumberInputProps } from '../../types'

export const FormattedNumberInput = ({
  onChange,
  formatter,
  ...rest
}: FormattedNumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    const unFormattedValue = value === ''
      ? value
      : formatter.unFormat(value)

    onChange?.(unFormattedValue)
  }

  const value = rest.value ?? ''

  const formattedValue = value === ''
    ? value
    : formatter.format(value)

  return (
    <Input
      { ...rest }
      value={ formattedValue }
      onChange={ handleChange }
    />
  )
}
