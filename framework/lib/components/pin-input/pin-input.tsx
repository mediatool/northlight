import React from 'react'
import { PinInput as ChakraPinInput, PinInputProps } from '@chakra-ui/react'
import { PinSizeProps } from '../../types'

interface Props extends PinInputProps {
  size?: PinSizeProps
  hidden?: boolean
}

export const PinInput = ({
  variant = 'outline',
  hidden,
  children,
  ...rest
}: Props) => (
  <ChakraPinInput { ...rest } variant={ variant } placeholder="●" mask={ hidden }>
    { children }
  </ChakraPinInput>
)
