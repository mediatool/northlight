import React from 'react'
import { Input } from '../input'
import { PlainTextInputProps } from '../../types'

export const PlainTextInput = ({
  onChange,
  ...rest
}: PlainTextInputProps) => (
  <Input
    onChange={ onChange }
    { ...rest }
  />
)
