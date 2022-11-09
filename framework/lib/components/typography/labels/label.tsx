import React from 'react'
import { FormLabel, useStyleConfig } from '@chakra-ui/react'
import { LabelProps } from './types'

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
      { ...rest }
    >
      { children }
    </FormLabel>
  )
}
