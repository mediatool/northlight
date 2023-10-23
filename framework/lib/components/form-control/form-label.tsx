import React, { forwardRef } from 'react'
import { FormLabelProps } from './types'
import { Label } from '../typography'

/**
 * Renders a label, meant to be used alongside a field component
 * @see Field
 * @see {@link https://northlight.dev/reference/form-label}
 *
 */
export const FormLabel = forwardRef<HTMLLabelElement, FormLabelProps >(({
  children: label,
  ...rest
}, ref) => (
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
    ref={ ref }
  >
    { label }
  </Label>
))
