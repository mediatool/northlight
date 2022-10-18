import React from 'react'
import { Text as ChakraText, TextProps, useMultiStyleConfig } from '@chakra-ui/react'

export const Capitalized = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useMultiStyleConfig('Capitalized', { sx })

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
