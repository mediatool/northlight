import React from 'react'
import { Text as ChakraText, TextProps, useMultiStyleConfig } from '@chakra-ui/react'

export const Tiny = ({
  children,
  sx,
  ...rest
}: TextProps) => {
  const styles = useMultiStyleConfig('Tiny', { sx })

  return (
    <ChakraText
      as="span"
      sx={ styles }
      { ...rest }
    >
      { children }
    </ChakraText>
  )
}
