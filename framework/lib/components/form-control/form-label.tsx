import React from 'react'
import { FormLabelProps } from './types.ts'
import { Label } from '../typography'

/**
 * Renders a label, meant to be used alongside a field component
 * @see Field
 * @see {@link https://northlight.dev/reference/form-label}
 *
 */
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
