import React from 'react'
import { Text as ChakraText, TextProps, useStyleConfig } from '@chakra-ui/react'

export const Capitalized = ({
  children,
  sx = {},
  ...rest
}: TextProps) => {
  const styles = useStyleConfig('Capitalized', { sx })

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
