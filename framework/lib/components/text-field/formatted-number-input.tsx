import React from 'react'
import { Input } from '../input'
import { FormattedNumberInputProps } from './types'

export const FormattedNumberInput = ({
  onChange,
  setValue,
  formatter,
  field,
  ...rest
}: FormattedNumberInputProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target: { value } } = e
    const unFormattedValue = value === ''
      ? value
      : formatter.unFormat(value)

    if (setValue !== undefined) {
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
      { ...rest }
      value={ formattedValue }
      onChange={ handleChange }
    />
  )
}
