import React from 'react'
import { coreSpacing } from '@mediatool/tokens'
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
      marginBottom: coreSpacing[1],
      marginInlineEnd: coreSpacing[3],
    } }
    { ...rest }
  >
    { label }
  </Label>
)
