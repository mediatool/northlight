import React from 'react'
import { PinInput as ChakraPinInput } from '@chakra-ui/react'
import { PinInputProps } from './types'

/**
 * For entering numbers in ex two factor authentication
 * @see {@link https://northlight.dev/reference/pin-input}
 * @example
 * (?
  <HStack p="1">
    <PinInput>
      <PinInputField />
      <PinInputField />
      <PinInputField />
      <PinInputField />
    </PinInput>
  </HStack>
 * ?)
 *
 *
 */
export const PinInput = ({
  variant = 'outline',
  hidden,
  children,
  ...rest
}: PinInputProps) => (
  <ChakraPinInput { ...rest } variant={ variant } placeholder="●" mask={ hidden }>
    { children }
  </ChakraPinInput>
)
