import React from 'react'
import { FormLabelProps } from './types'
import { Label } from '../typography'

export const FormLabel = ({
  children: label,
  ...rest
}: FormLabelProps) => (
  <Label
    size="sm"
    sx={ {
      width: '80%',
      maxWidth: '45ch',
      marginBottom: 1,
      marginInlineEnd: 3,
    } }
    requiredIndicator={ undefined }
    { ...rest }
  >
    { label }
  </Label>
)
