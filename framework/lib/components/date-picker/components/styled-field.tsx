import React, { HTMLAttributes, ReactNode, forwardRef } from 'react'
import { useMultiStyleConfig } from '@chakra-ui/react'
import { Box } from '../../box'

interface Props extends HTMLAttributes<HTMLElement> {
  isInvalid?: boolean
  isDisabled?: boolean
  children: ReactNode
}

export const StyledField = forwardRef(({
  isInvalid,
  isDisabled,
  children,
  ...rest
}: Props, ref: any) => {
  const { styledField } = useMultiStyleConfig('DatePicker')

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
})
