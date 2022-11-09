import React from 'react'
import { FormLabelProps } from './types'
import { Label } from '../typography'

export const FormLabel = ({
  children: label,
  ...rest
}: FormLabelProps) => (
  <Label size="sm" { ...rest }>{ label }</Label>
)
