import React, { forwardRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Box } from '../../../box'
import { StyledFieldProps } from './types.ts'

export const StyledField = forwardRef((
  { isInvalid, isDisabled, children, variant, ...rest }: StyledFieldProps,
  ref: any
) => {
  const { styledField } = useMultiStyleConfig('DatePicker', { variant })

  return (
    <Box
      { ...rest }
      ref={ ref }
      aria-invalid={ isInvalid }
      aria-disabled={ isDisabled }
      display="flex"
      alignItems="center"
      h={ 10 }
      __css={ styledField }
    >
      { children }
    </Box>
  )
}
)
