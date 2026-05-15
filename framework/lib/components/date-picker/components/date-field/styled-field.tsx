import React, { forwardRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Box } from '../../../box'
import { StyledFieldProps } from './types'

export const StyledField = forwardRef((
  { isInvalid, isDisabled, children, variant, size, ...rest }: StyledFieldProps,
  ref: any
) => {
  const { styledField } = useMultiStyleConfig('DatePicker', { variant, size })

  return (
    <Box
      { ...rest }
      ref={ ref }
      aria-invalid={ isInvalid }
      aria-disabled={ isDisabled }
      display="flex"
      alignItems="center"
      __css={ styledField }
    >
      { children }
    </Box>
  )
}
)
