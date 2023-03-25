import React from 'react'
import { FormLabel, VisuallyHidden, useStyleConfig } from '@chakra-ui/react'
import { LabelProps } from './types'

/**
 * One of the stylized typography components
 * @see Blockquote
 * @see Lead
 * @see Small
 * @see Tiny
 * @see {@link https://northlight.dev/reference/label }
 *
 * @example
 * (?
 * <Label sx={{color: 'brand.500' }} size="lg">Brand</Label>
 * ?)
 * (_Note, all other css properties not listed
 * under the props tab to right should be passed down via **sx**_)
 *
 */
export const Label = ({
  children,
  size = 'sm',
  sx = {},
  ...rest
}: LabelProps) => {
  const styles = useStyleConfig('Label', { sx, size })

  return (
    <FormLabel
      sx={ styles }
      requiredIndicator={ <VisuallyHidden /> }
      { ...rest }
    >
      { children }
    </FormLabel>
  )
}
